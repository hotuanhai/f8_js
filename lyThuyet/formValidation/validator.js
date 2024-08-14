//obj validator
function Validator(option){
    function getParent(element, selector){
        while(element.parentElement){
            //check if parent is selector
            if(element.parentElement.matches(selector)){  
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    // console.log(option)
    // ham kiem tra da nhap dl chua
    var selectorRules = {}
    function validate(inputEle,rule){
        var errElement = getParent(inputEle,option.formGroupSelector).querySelector(option.errSelector)
        var errMessage
        // lay ra tung rule cua 1 element
        var rules = selectorRules[rule.selector]
        for( var i = 0 ; i < rules.length; ++i ){
            switch(inputEle.type){
                case `radio`:
                case `checkbox`:
                    errMessage = rules[i](
                        formEle.querySelector(rule.selector + `:checked`)
                    )
                    break
                default:
                    errMessage = rules[i](inputEle.value)
            }
            
            if(errMessage) break  //in ra rule dau tien bi vi pham
        }

        if(errMessage){
            errElement.innerText = errMessage
            getParent(inputEle,option.formGroupSelector).classList.add(`invalid`)
        }
        else{
            errElement.innerText = ``
            getParent(inputEle,option.formGroupSelector).classList.remove(`invalid`)
        }

        return !errMessage //! to convert to bool
    }

    console.log(option.rules)
    // lay element cua form
    var formEle = document.querySelector(option.form)
    if(formEle){
        //handle button
        formEle.onsubmit = function(e){
            e.preventDefault()
            var isFormValid = true
            option.rules.forEach(function(rule){
                //console.log(rule)
                var inputEle = formEle.querySelector(rule.selector)
                var isValid = validate(inputEle,rule)
                if(!isValid){
                    isFormValid = false
                } 
            })
            var enableInputs = formEle.querySelectorAll(`[name]`)
            
            // console.log(enableInputs)
            if(isFormValid){
                // sd submit cua JS
                if(typeof option.onSubmit == `function`){
                    //convert obj to array
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
                    // console.log(formValues)
                    // call API
                    option.onSubmit({formValues})
                }
                // sd submit cua html ( default)
                else{
                    formEle.submit()
                }
            }
        }
        // console.log(formEle)
        // lap qua moi rule va xu ly su kien
        option.rules.forEach(function(rule){
            //luu lai cac rule
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector] = [rule.test]
            }

            var inputEles = formEle.querySelectorAll(rule.selector)
            Array.from(inputEles).forEach(function(inputEle){
                // console.log(inputEle)
                if(inputEle){
                    // xu li TH blur ra ngoai input
                    inputEle.onblur = function(){
                        //val: inputEle.value
                        //test func: rule.test
                        validate(inputEle,rule)                   
                    }
                    inputEle.oninput = function(){
                        var errElement = getParent(inputEle,option.formGroupSelector).querySelector(option.errSelector)
                        errElement.innerText = ``
                        getParent(inputEle,option.formGroupSelector).classList.remove(`invalid`)
                    }
                }
            })
            
        })
        // console.log(selectorRules)
    }
}
//rule
//khi co value -> k tra ve gi
Validator.isRequired = function(selector,message){
    return{
        selector: selector,
        test: function(value){
            return value ? undefined : message || `Vui long nhap du lieu`
        }
    } 
}

Validator.isEmail = function(selector){
    return{
        selector: selector,
            test: function(value){
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                return regex.test(value) ? undefined : `Vui long nhap email`
            }
    }  
}

Validator.minLength = function(selector,min){
    return{
        selector: selector,
            test: function(value){
                return value.length >= min ? undefined : `pass phai co do dai hon ${min} ky tu`
            }
    }  
}

Validator.isConfirmed = function(selector,getConfirmVal,message){
    return{
        selector: selector,
            test: function(value){
                return value == getConfirmVal() ? undefined : message ||`gia tri nhap vao chua chinh xac`
            }
    }  
}