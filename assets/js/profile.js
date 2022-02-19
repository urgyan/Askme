class AddFriend{
    constructor(addElement){
        this.adder = addElement;
        this.addFriend();
    }
    addFriend(){

        $(this.adder).click(function(e){
            e.preventDefault();
            console.log("yeh am clicked")
            let self = this;

            $.ajax({
                type:'POST',
                url:$(self).attr('href'),
            })
            .done(function(data){
                if(data.data.toggle == 1){
                  
                    let addF = $('.add-friend');
                    $(' button ', addF).html("Un-Friend");

                    var ab = $(`#delete-friend-${data.data.friendId}`);
                    console.log(ab)
                    new Noty({
                        theme: 'relax',
                        text: `Added to your friend list`,
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();
                }else{
                    // $('.add-friend').html('<button>Add-Friend</button>');  
                    
                    let addF = $('.add-friend');
                    $(' button ', addF).html("Add-Friend");
                    $(`.delete-friend-${data.data.friendId}`).remove();
                    var ab = $(`.delete-friend-${data.data.friendId}`);
                    console.log(ab)
                    new Noty({
                        theme: 'relax',
                        text: `Removed from your friend list`,
                        type: 'error',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show(); 
                }
            })
        })
    }


}