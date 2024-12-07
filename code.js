window.onload = function(){
    var screen_x = window.innerWidth;
    var screen_y = window.innerHeight;

    var etoile = document.getElementById("etoile");
    var etoile_arr = new Array();

    for (var i = 0;i<70;i++){
        var etoileClone = etoile.cloneNode(true);
        etoileClone.style.position = "absolute";

        var rand_x = Math.random() * screen_x;
        var rand_y = Math.random() * screen_y;

        etoileClone.style.left = rand_x + "px";
        etoileClone.style.top = rand_y + "px";

        document.body.appendChild(etoileClone);

        etoile_arr.push({event:etoileClone});
    }

    function etoile_anim (){
        etoile_arr.forEach(function(etoile_obj){
            let etoile_oppaciter = Math.random() > 0.5 ? 1 : 0;
            etoile_obj.event.style.opacity = etoile_oppaciter;
        });
    }

    setInterval(etoile_anim,1000);

    var filant = document.getElementById("filant");
    filant.style.top = "0px";
    filant.style.right = "0px";
    var filant_speed = 5;

    function filant_move() {
        var filant_x = parseInt(filant.style.top, 10);
        var filant_y = parseInt(filant.style.right, 10);

        if (filant_x < screen_x && filant_y < screen_y) {
            filant.style.top = filant_x += filant_speed + "px";
            filant.style.right = filant_y += filant_speed + "px";
        } else {
            filant.style.top = "0px";
            filant.style.right = "0px";
        }
    }

    setInterval(filant_move,220);

    document.getElementById("sun");
    var mercure = document.getElementById("mercure");
    document.getElementById("venuse");
    document.getElementById("terre");
    document.getElementById("marse");
    document.getElementById("jupiter");
    document.getElementById("saturn");
    document.getElementById("uranus");
    document.getElementById("neptune");
    

    function planete_fun(planete_id, speed_x, speed_y) {
        var planete = document.getElementById(planete_id);
        if (!planete) {
            console.error("Élément introuvable :", planete_id);
            return;
        }
    
        planete.style.position = "absolute";
        var rect = planete.getBoundingClientRect();
        var startX = rect.left;
        var startY = rect.top;  
    
        var x = startX;
        var y = startY;
        var step = 0; 
    
        function move_planete() {
            if (step === 0) {
                x -= speed_x;
                y -= speed_y;
                if (y <= 0) {
                    step = 1; 
                }
            }
            else if (step === 1) {
                x += speed_x;
                y += speed_y;
                if (y >= startY && x >= startX) {
                    step = 2; 
                }
            }
            else if (step === 2) {
                x -= speed_x;
                y += speed_y;
                if (y >= window.innerHeight) {
                    step = 3; 
                }
            }
            else if (step === 3) {
                x += speed_x;
                y -= speed_y;
                if (y <= startY && x >= startX) {
                    step = 0; 
                }
            }
    
            planete.style.left = x + "px";
            planete.style.top = y + "px";
    
            requestAnimationFrame(move_planete);
        }
    
        move_planete(); 
    }
    
    planete_fun("mercure", 0.5, 0.5);    
    planete_fun("venus", 0.4, 0.4);      
    planete_fun("terre", 0.3, 0.3);      
    planete_fun("marse", 0.25, 0.25);    
    planete_fun("jupiter", 0.2, 0.2);    
    planete_fun("saturn", 0.15, 0.15);  
    planete_fun("uranus", 0.1, 0.1);     
    planete_fun("neptune", 0.05, 0.05);  
    
};

