
const Club = function () {


    this.userAgeFind = function() {

        studentData.map((data , index) =>{
    
            let result = () =>{
    
                return`
            
                ID          :${ index + 1 }
                Name        :${data.name}
                Age         :${data.age}
                
            
                showing ${ index + 1 } out of ${studentData.length} 
                `
            }
    
            // for upper 18 & under 40
            if(data.age >= 18 && data.age < 40){
                console.log(`
            ================================
                ${result()}
            ================================
            Apnake welcome
                `)
            }
    
            // for under 40
            if(data.age > 40){
                console.log(`
            ================================
                ${result()}
            ================================
            Apner jonno club jhukipurno
                `)
            }
    
            // for upper 18 
            if(data.age < 18){
                console.log(`
            ================================
                ${result()}
            ================================
            Tumi choto
                `)
            }
    
    
        }) 
    }
    
}