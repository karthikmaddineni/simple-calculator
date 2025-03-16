let entered_values=[];

const display=document.getElementById('display');

function add_value(a) {
    if (a === '=') {
        if (entered_values.length === 0) return;
        
        // Converting 'X' to '*' for multiplication
        let expression = entered_values.join('').replace(/X/g, '*');

        try {
            let result = eval(expression);  // Using eval safely since it's basic calculations
            display.textContent = result;
            entered_values = [result.toString()]; // Store result for further calculations
        } catch (error) {
            display.textContent = "Error";
            entered_values = [];
        }
    } else if (/^\d+$/.test(a) || ['+', '-', '/', 'X'].includes(a)) {
        entered_values.push(a);
        display.textContent = entered_values.join('');
    } else {
        display.textContent = "Error";
        entered_values = [];
    }
}

const div1=document.getElementById('div1');
div1.addEventListener('click',()=>add_value(div1.textContent));

const div_ce=document.getElementById('div_ce');
div_ce.addEventListener('click',()=>add_value(div_ce.textContent));

const div2=document.getElementById('div2');
div2.addEventListener('click',()=>add_value(div2.textContent));

const div3=document.getElementById('div3');
div3.addEventListener('click',()=>add_value(div3.textContent));

const div4=document.getElementById('div4');
div4.addEventListener('click',()=>add_value(div4.textContent));

const div5=document.getElementById('div5');
div5.addEventListener('click',()=>add_value(div5.textContent));

const div6=document.getElementById('div6');
div6.addEventListener('click',()=>add_value(div6.textContent));

const div7=document.getElementById('div7');
div7.addEventListener('click',()=>add_value(div7.textContent));

const div8=document.getElementById('div8');
div8.addEventListener('click',()=>add_value(div8.textContent));

const div9=document.getElementById('div9');
div9.addEventListener('click',()=>add_value(div9.textContent));

const div0=document.getElementById('div0');
div0.addEventListener('click',()=>add_value(div8.textContent));

const div_add=document.getElementById('div_add');
div_add.addEventListener('click',()=>add_value(div_add.textContent));

const div_eq=document.getElementById('div_eq');
div_eq.addEventListener('click',()=>add_value(div_eq.textContent));

const div_minus=document.getElementById('div_minus');
div_minus.addEventListener('click',()=>add_value(div_minus.textContent));

const div_multi=document.getElementById('div_multi');
div_multi.addEventListener('click',()=>add_value(div_multi.textContent));

const div_div=document.getElementById('div_div');
div_div.addEventListener('click',()=>add_value(div_div.textContent));