function main(){
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = data.get('nombre');
        console.log({ value });
        }
        const form = document.querySelector('.formulario');
        form.addEventListener('submit', handleSubmit);

const click = document.addEventListener("submit",(e)=>{
    e.preventDefault()
})

}
main()