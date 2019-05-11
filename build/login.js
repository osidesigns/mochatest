class Validator{

  constructor(){

  }
  
  lettersOnly(str){
    var letters = /^[a-zA-Z]+$/;

    if(!str.match(letters)){
      return false;
    }else{
      return true;
    }
  }

  numericOnly(str){
    var nums = /^[0-9]+$/;

    if(!str.match(nums)){
      return false;
    }else{
      return true;
    }
  }

  maxLen(str){
    return str.length;
  }

}

module.exports = Validator;
