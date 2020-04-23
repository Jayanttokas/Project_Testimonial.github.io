var controller = (() => {
  let counter = 0;
  const data = [
    {name: "Robert"},
    {name: "Albert"},
    {name: 'Rohan'},
    {name: 'Seema'}
  ];

  const changeTestimonial = (e) =>{
      if(e.target.id == 'next'){
        if (counter>data.length-1){
          counter = 0;
          displayTestimonial(counter);
        }
        displayTestimonial(counter);
        counter++;
      }

      if(e.target.id =="back"){
        if(counter == 0){
          displayTestimonial(counter)
          counter = data.length-1;
        }
        displayTestimonial(counter);
        counter--;
      }
  }

  const displayTestimonial = (index) => {
    document.getElementById("name").innerHTML = `<h4>${data[index].name}</h4>`;
  }

  const eventHandler = () => {
    document.getElementById("next").addEventListener('click', changeTestimonial);
    document.getElementById("back").addEventListener('click', changeTestimonial);
  }

  return{
    init: () => {
      console.log('App started');
      eventHandler();
    }
  }

})();

controller.init();
