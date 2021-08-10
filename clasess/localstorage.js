class LC {
    addLC(name){
        let newdata;
        if (lc.getLcData(name) === null) {
            newdata = 1;
        }
        else{
            newdata = lc.getLcData(name) + 1;
        }
        
        localStorage.setItem(name, JSON.stringify(newdata));
    }

    
    WriteandShow(){
       if (lc.getLcData('PC') === null) {
        pcScore.textContent = '0';
       }
       else{
        pcScore.textContent = lc.getLcData('PC');
       }

       if (lc.getLcData('US') === null) {
        userScore.textContent = '0';
       }
       else{
        userScore.textContent = lc.getLcData('US');
       }
        
        
        
    }
    removeLC(){

    }
    removeAllLc(){
        localStorage.clear();
        location.reload();
        
    }
    getLcData(name){
        
       const lcdata =  localStorage.getItem(name);
    //    if (lcdata) {
           
    //    }
       return JSON.parse(lcdata)
    }
}