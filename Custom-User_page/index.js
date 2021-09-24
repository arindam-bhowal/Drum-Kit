const inputs = document.querySelectorAll('.controls input');

function updateChange(){
    let suffix= this.dataset.unit || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach(input=>input.addEventListener('change', updateChange));
inputs.forEach(input=>input.addEventListener('mousemove', updateChange));