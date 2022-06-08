(
    function(){
        let step = 1
        let pre = document.getElementsByClassName('pre')[0]
        let next = document.getElementsByClassName('next')[0]
        let stepBar = document.getElementsByClassName('step-bar')[0]
        pre.addEventListener('click', function(){
            if(step>1){
                document.getElementsByClassName(`step${step}`)[0].style.cssText = '--current: #e9e9e9'
                step -= 1
                next.disabled = false
            }
            if(step == 1){
                this.disabled = true
            }
            stepBar.style.cssText = `--precent:${(step-1)*33}%`
        })
        next.addEventListener('click', function(){
            pre.disabled = false
            if(step<3){
                step += 1
                document.getElementsByClassName(`step${step}`)[0].style.cssText = '--current: #982341'
                pre.disabled = false
            }else if(step=3){
                step += 1
                document.getElementsByClassName(`step${step}`)[0].style.cssText = '--current: #982341'
                this.disabled = true
            }else{
                this.disabled = true
            }
            stepBar.style.cssText = `--precent:${(step-1)*33}%`
        })

    }
)(window)