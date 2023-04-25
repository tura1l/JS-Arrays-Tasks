//Massivden elemnt silmek
  let obj = {
    arr : [1,5,7,98,89,4,2,234,6,8,94],
    remove : function() {
      return this.arr[this.arr.length--]
    }
  }
  obj.remove()
  alert(obj.arr);
