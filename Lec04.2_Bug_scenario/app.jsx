function App(){
    let count = 0;
    function IncreaseNumber(){
        count++;
        const para = document.querySelector('p');
        para.textContent = `Counter: ${count}`;

        const button = document.querySelector('button');
        button.textContent = `Increment: ${count}`;
    }
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={IncreaseNumber}>Increment: {count}</button>
        </div>
    );
}