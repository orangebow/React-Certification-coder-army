import {useForm} from 'react-hook-form';
import {z} from 'zod'; //npm i zod;
import {zodResolver} from '@hookform/resolvers';



const formSchema = z.object({
    name: z.string().min(3,"Minimum length 3").max(20,"Maximum Length 20"),
    age: z.coerce.number().min(10, "Age should be greater than 10").max(80,"Age should be less than 80"),
    password: z.string().min(5, "Password should be greater than 5").max(20,"Password should be less than 20"),
    confirm_password: z.string(),
    email: z.email("Invalid Email Id"),
}).refine((data)=>{
    data.password === data.confirm_password,{
        message: "Passwords dont match",
        path: ["confirm_password"] //Path of error.
    }
})

//install following library to use this formSchema:
//npm i @hookform/resolvers 

function Form(){
  
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchema)
    });

    function submitForm(data){
        console.log(data);
    }

    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name: </label>
            <input id="first" {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="fourth">Age: </label>
            <input id="fourth" {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age: </label>
            <input id="second" {...register('age')}/>
                {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label htmlFor="third">Password: </label>
            <input type="password" id="third" {...register('password')}/>
            {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
            <label htmlFor="fifth">Confirm Password: </label>
            <input type="password" id="fifth" {...register('confirm_password')}/>
            {errors.confirm_password && <span>{errors.confirm_password}</span>}
        </div>
        <button>Submit</button>
        </form>
        </>
    )
}

export default Form;