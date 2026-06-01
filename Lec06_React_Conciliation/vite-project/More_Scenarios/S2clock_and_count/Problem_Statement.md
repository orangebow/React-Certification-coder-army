//Problem:
Before clicking Increment Button:
![Before](Images/Before_Clicking_Increment_Clocks.png)

After clicking:
![After](Images/After.png)

Issue due to missing use of the unique key
without key: My code
<div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px"}}>
            {clocks.map(clock => <counting name={clock}></counting>)}
</div>

With Key:
<div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px"}}>
            {clocks.map(clock => <counting key={clock} name={clock}></counting>)}
</div>

Result:
![usetheKey](Images/key.png)