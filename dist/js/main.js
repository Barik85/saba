//vertical text animation 
let leftSide = document.querySelector('.left-menu-box');
let leftText = document.querySelector('.left-vertical-txt');
leftSide.addEventListener('mouseover', function() {
    leftText.classList.add('active') });
leftSide.addEventListener('mouseout', function() {
    leftText.classList.remove('active') });
    
let rightSide = document.querySelector('.right-menu-box');
let rightText = document.querySelector('.right-vertical-txt');
rightSide.addEventListener('mouseover', function() {
    rightText.classList.add('active') });
rightSide.addEventListener('mouseout', function() {
    rightText.classList.remove('active') });

let menuLinks = document.querySelectorAll('.main-menu-link'),
    menuItems = document.querySelectorAll('.main-menu-item');

// menu items darken when mouseover    
menuItems.forEach(function(item, i, arr){
    item.addEventListener('mouseover', function(event){
        menuLinks.forEach(function(item, i, arr){
            item.classList.add('darkened');
        });
        this.querySelector('.main-menu-link').classList.remove('darkened');
    })
    item.addEventListener('mouseout', function(event){
        menuLinks.forEach(function(item, i, arr){
            item.classList.remove('darkened')
        });
    })
});
    
//Logo canvas animation
(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes
    
    // library properties:
    lib.properties = {
        width: 333,
        height: 333,
        fps: 60,
        color: "#000000",
        opacity: 1.00,
        manifest: [
            {src:"img/gold.png?1516702295067", id:"gold"},
            {src:"img/logo.png?1516702295067", id:"logo"}
        ]
    };
    
    
    
    lib.ssMetadata = [];
    
    
    // symbols:
    
    
    
    (lib.gold = function() {
        this.initialize(img.gold);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,484,360);
    
    
    (lib.logo = function() {
        this.initialize(img.logo);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,452,429);
    
    
    (lib.Анимация2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Слой 1
        this.instance = new lib.gold();
        this.instance.setTransform(-242,-180);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-242,-180,484,360);
    
    
    (lib.Анимация1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,151,0.6)","rgba(255,255,255,0.8)","rgba(255,255,156,0.6)","rgba(255,255,255,0)"],[0,0.459,0.486,0.549,1],-250.9,3.2,251.1,-3.3).s().p("Egn3gyFMBObgBDMABUBlPMhOaABCg");
        this.shape.setTransform(-0.1,0,0.53,1,40.2);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-311.1,-332.2,622.2,664.5);
    
    
    (lib.gold_ = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Слой 1
        this.instance = new lib.Анимация2("synched",0);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},347).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-242,-180,484,360);
    
    
    (lib.main = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Isolation Mode (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AqDX1Qkph+jljkQjmjmh9kqQiCkzABlQQgBlPCCk0QB9knDmjmQDljlEph+QEziDFQAAQFQAAEzCCQEpB+DmDlQDlDlB9EpQCDE0AAFPQAAFQiDEzQh9EqjlDmQjmDkkpB+QkzCClQAAQlQAAkziCgApm2tQkcB4jaDaQjaDah4EcQh9ElAAFAQAAFCB9ElQB4EcDaDaQDaDbEcB3QEmB9FAgBQFCABElh9QEbh2DbjcQDbjaB3kcQB8klAAlCQAAlAh8klQh4kcjajaQjbjakbh4Qklh9lCAAQlAAAkmB9gAgfSeQjegJiWijQiSiiAKjaIDZAAIAABVIhrAAQARCNBaBcQBrBrC+AHQDWAJBwiIQBYhsAIirQAJjZith2QhDgshxgtQiHgyhGgbQkIhmh3iGQiqjCAPleQA+FODTC1QCFBxEbBmQEdBlBXBKQChCEgLEGQgJDbiiCWQiaCMjKAAIgZgBgAGpB3QiGh0kbhjQkchnhYhJQigiFALkEQAJjdCiiTQCiiWDaAJQDeAJCVClQCSCggJDcIjaAAIAAhWIBsAAQgRiPhahaQhrhri+gHQjWgJhvCIQhaBrgHCsQgIDYCtB2QBCAtBzAsQA+AaCOA0QEJBmB1CGQCrDCgPFeQg+lPjTi0g");
        mask.setTransform(167.6,167.6);
    
        // Слой 6
        this.instance = new lib.gold_();
        this.instance.setTransform(176.4,171.1,1,1.111);
        this.instance.alpha = 0.219;
    
        this.instance.mask = mask;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(310));
    
        // Слой 5
        this.instance_1 = new lib.Анимация1("synched",0);
        this.instance_1.setTransform(-175,-54);
    
        this.instance_1.mask = mask;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:449.1,y:399.5},167).wait(143));
    
        // Слой 4
        this.instance_2 = new lib.logo();
        this.instance_2.setTransform(-75,-61);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(310));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75,-61,452,429);
    
    
    // stage content:
    (lib.Saba_logo = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // Слой 1
        this.instance = new lib.main();
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-319.6,-219.8,904.6,757.4);
    
    })(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
    var lib, images, createjs, ss;

    //from body canvas
    var canvas, stage, exportRoot;
    function init() {
        canvas = document.getElementById("canvas");
        images = images||{};
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt) {	
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
    }
    function handleComplete(evt) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for(i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }
        exportRoot = new lib.Saba_logo();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);	
        //Registers the "tick" event listener.
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);	    
        //Code to support hidpi screens and responsive scaling.
        (function(isResp, respDim, isScale, scaleType) {		
            var lastW, lastH, lastS=1;		
            window.addEventListener('resize', resizeCanvas);		
            resizeCanvas();		
            function resizeCanvas() {			
                var w = lib.properties.width, h = lib.properties.height;			
                var iw = window.innerWidth, ih=window.innerHeight;			
                var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
                if(isResp) {                
                    if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                        sRatio = lastS;                
                    }				
                    else if(!isScale) {					
                        if(iw<w || ih<h)						
                            sRatio = Math.min(xRatio, yRatio);				
                    }				
                    else if(scaleType==1) {					
                        sRatio = Math.min(xRatio, yRatio);				
                    }				
                    else if(scaleType==2) {					
                        sRatio = Math.max(xRatio, yRatio);				
                    }			
                }			
                canvas.width = w*pRatio*sRatio;			
                canvas.height = h*pRatio*sRatio;
                canvas.style.width = w*sRatio+'px';			
                canvas.style.height = h*sRatio+'px';
                stage.scaleX = pRatio*sRatio;			
                stage.scaleY = pRatio*sRatio;			
                lastW = iw; lastH = ih; lastS = sRatio;		
            }
        })(false,'both',false,1);	
    }
let body = document.querySelector('body');
body.onload = init();
