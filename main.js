$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault()
        const produtoAdicionado = $('#produto').val()
        const save = $("<li></li>")
        const ul = $('<ul></ul>') 
        $(`<p id="p1">${produtoAdicionado}</p>`).appendTo(save)
        $(save).appendTo('ul')
        $("#produto").val("")
       
        
        
        $('p').click(function(){
         $('p').addClass('line')
        
      })
    })    
  })
  
  
