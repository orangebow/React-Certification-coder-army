import {useForm} from 'react-hook-form';

function Form(){
  
    const {register, handleSubmit, formState: {errors}} = useForm();

    function submitForm(data){
        console.log(data);
    }

    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name: </label>
            <input id="first" {...register('name', {required: "Name can't be empty"})}/>
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age: </label>
            <input id="second" {...register('age',
                {
                    min:{
                        value:10,
                        message: "Age cant be less than 10" 
                    },
                    max: {
                        value: 80,
                        message: "Age can't be greater than 80"
                    }
                })}/>
                {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label htmlFor="third">Password: </label>
            <input type="password" id="third" {...register('password',
            {
                    minLength:{
                        value:10,
                        message: "Minimum Length must be 10" 
                    },
                    maxLength: {
                        value: 80,
                        message: "Maximum Length must be 80"
                    }
            })}/>
        </div>
        <button>Submit</button>
        </form>
        </>
    )
}

export default Form;