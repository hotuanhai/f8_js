function Validator(formSelector){
    var _this = this
    function getParent(element, selector){
        while(element.parentElement){
            //check if parent is selector
            if(element.parentElement.matches(selector)){  
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    var formRules = {}
    /* 
        k co loi return undefined
        co loi return errMesage
    */
    var validatorRules = {
        required: function(value){
            return value ? undefined : `Vui long nhap du lieu`
        },
        email: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : `Vui long nhap email`
        },
        min: function(min){
            return function(value){
                return value.length >= min ? undefined : `Vui long nhap it nhat ${min} ky tu`
            }
        },
        max: function(max){
            return function(value){
                return value.length >= max ? undefined : `Vui long nhap toi da ${max} ky tu`
            }
        }
    }
    // lay ra form
    var formEle = document.querySelector(formSelector)
    if(formEle){
        var inputs = formEle.querySelectorAll(`[name][rules]`)
        for(var input of inputs){
            var rules = input.getAttribute(`rules`).split(`|`)
            for (var rule of rules){
                //handle min:6 or max:6 
                // min max is loop func
                var ruleInfo
                var isRuleHasVal = rule.includes(`:`)
                if(isRuleHasVal){
                    var ruleInfo = rule.split(`:`)
                    rule = ruleInfo[0]
                }
                var ruleFunc = validatorRules[rule]
                if(isRuleHasVal){
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc)
                }else{
                    formRules[input.name] = [ruleFunc]
                }
            }
           

            // event lístening
            input.onblur = handleValidate
            input.oninput = handleClearErr
        }
        function handleValidate(e){
            var rules = formRules[e.target.name]
            var errMessage
            rules.some(function(rule){
                errMessage = rule(e.target.value)
                return errMessage
            })
            //hien thi errMessage
            if(errMessage){
                var formGroup = getParent(e.target, `.form-group`)
                if(formGroup){
                    formGroup.classList.add(`invalid`)
                    var formMessage = formGroup.querySelector(`.form-message`)
                    if(formMessage){
                        formMessage.innerText = errMessage
                    }
                }
            }
            return !errMessage
        }

        function handleClearErr(e){
            var formGroup = getParent(e.target, `.form-group`)
            if(formGroup.classList.contains(`invalid`)){
                formGroup.classList.remove(`invalid`)
                var formMessage = formGroup.querySelector(`.form-message`)
                    if(formMessage){
                        formMessage.innerText = ``
                    }
            }
        }

        // form submit handle
        formEle.onsubmit = function (e){
            e.preventDefault()

            var inputs = formEle.querySelectorAll(`[name][rules]`)
            var isvalid = true
            for (var input of inputs){
                if(!handleValidate({target: input})) isvalid = false
            }
            if(isvalid){
                if(typeof _this.onSubmit ===`function`){
                    var enableInputs = formEle.querySelectorAll(`[name]`)
                    var formValues = Array.from(enableInputs).reduce(function(values,input){
                        switch(input.type){
                            case `radio`:
                                if(input.matches(`:checked`)){
                                    values[input.name] = input.value
                                }
                                break
                            case `checkbox`:
                                // no value
                                if(!input.matches(`:checked`)) {
                                    values[input.name] = ``
                                    return values
                                }
                                if(!Array.isArray(values[input.name])) values[input.name] = []
                                values[input.name].push(input.value)
                                break
                            case 'file':
                                values[input.name] = input.files
                                break
                            default:
                                values[input.name] = input.value
                        }
                        
                        return values
                    },{})


                    _this.onSubmit(formValues)
                }else formEle.submit()
            }
        }

        
        // console.log(formRules)
    }
}