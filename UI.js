class UI{
    displayStatus(message, className){
        this.clearStatus();
        const status = document.querySelector('.statusMessage');
        status.textContent = message;
        status.classList.add(className);
        setTimeout(()=>{
            this.clearStatus();
        }, 4000);
    }
    clearStatus(){
        const status = document.querySelector('.statusMessage');
        status.textContent = '';
        status.classList.remove('success');
        status.classList.remove('failure');
    }
}