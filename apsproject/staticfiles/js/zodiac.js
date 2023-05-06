function zodiac(){
  var birthmonth = document.getElementById("month").value;
   var birthday = document.getElementById("day").value;
 var result = " unknown because you didn't put a valid date.";


if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Aquarius");
     document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
   document.getElementById("characteristic").innerHTML="Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm.";

    }
else if (birthmonth == 2 && birthday> 29){
       alert("Please enter a valid  date ! ");
    }

else if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
       result = ("Pisces");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Pisceans live in their imaginary world that barely has a connection with the reality. They love to look at the world through a rosy window. When challenged by reality, Pisceans have the tendency to retreat into their world of imagination.";

    }
else if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
       result = ("Aries");
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
     document.getElementById("characteristic").innerHTML="Aries demonstrate strong personality. They have strong leadership qualities and honest and straightforward. Aries often have strong determination and can’t be deterred by failures.Aries are always eager for action. They take up to leadership spontaneously. But they don’t judge the pros and cons of a situation before acting. This also makes them vulnerable.";
   }

else if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Taurus");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
       document.getElementById("characteristic").innerHTML="Taureans are noted for their determination and zeal. It is not easy to distract a Taurian from his goal once he has set his target. He would stay focused on his target and would continuously strive to achieve it.Taureans attach high value to simplicity and functionality. They often live a life that is simple and devoid of luxury.";

    }

else if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
     ){
        result = ("Gemini");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Geminis are full of duality. They always look to a situation from dual perspective. Geminis are characterized by inconstancy and dual nature. Geminis therefore always stay confused about their feelings.Geminis however are strong communicators and express good control over language. They are often found to have knowledge over several languages.";

    }

else if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Cancer");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Cancerians are emotional. Their lives are often inflicted with mood shifts. You can find a Canerian in different moods even during a day.The true emotion of Cancer however is hidden behind their composure. But they are soft creatures and can be hurt easily by unkind words.People of the Cancer zodiac sign can be prone to depression and other mental issues. However, cancers are great family people and enjoy big families around them.";

    }
else if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Leo");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
            document.getElementById("characteristic").innerHTML="Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration. Leos always love to be at the centre of attraction. They strive to reach to the top in whatever they do. Leos always love to be surrounded with large crowd and admirers. However, they are often unkind to criticism and don’t take the words of critics lightly.Leos are very ambitious and choose their acquaintances carefully. They aspire for social recognition.";

    }
else if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Virgo");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Virgos have a keen sense of good and bad and for that they are highly discriminating. They have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do.The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities.";
    }
else if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Libra is an active sign and members born under the sign are endowed with high energy. But Librans also tend to run out of their energy soon.The Libra is the ‘balance’ and members of this sign have a very balanced mind. They can be found in settling disputes often. Librans always try to maintain harmony and balance. They are also very level headed and have a keen sense for justice. Therefore, their suggestions are often highly sought after by their friends and kins.Librans are two faceted characters. They both have the cheerfulness and darkness in them. Librans have phases of heightened activities but they can easily slip into a phases of complete inactivity and apathy as well.";
    }
else if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
       result = ("Scorpio");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Scorpions are most diverse in nature and therefore present the most interesting study. Scorpios hold grudge and would wait patiently for the right moment to strike. They are not likely to forget any act of betrayal or treachery. For Scorpios what is implied is more fascinating than the obvious.Scorpios are often described as egoists. However, some of the positive traits of Scorpios are- diplomacy, intuition, intelligence, engaging, resolute, spirituality and sensitivity.";
    }
else if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Sagittarius");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Sagittarians are the incurable optimists. They are always looking at the positive side of a thing. Their optimism can’t be dampened by hardships or negative results.Sagittarians often are outdoor people. They will take interest in all sorts of sports and outdoor activities. They are also adventures in nature. Although they are true to their faults but can also turn completely deaf to criticism and turn down suggestions.";
    }

else if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){

        result = ("Capricorn");
     document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
     document.getElementById("characteristic").innerHTML="Members of this sign has an insatiable desire to climb higher and during this course they can also become selfish and might not hesitate to sacrifice other’s interests in fulfilling their goals.Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection.";
    }

else if (birthmonth< 1 || birthmonth> 12){
       alert("Please enter a valid date ! ");
    }



else if (birthmonth == 1 || birthmonth == 3 || birthmonth == 5 || birthmonth == 7 || birthmonth == 8 && birthday>31){
       alert("Please enter a valid date ! ");
    }

else if (birthmonth == 4 || birthmonth == 6 || birthmonth == 9 || birthmonth == 11 && birthday> 30){
       alert("Please enter a valid date ! ");
    }



 document.getElementById("output").innerHTML= result;
}

// For the Background
(function() {

    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: width/2, y: height/2};


        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = 0; x < width; x = x + width/20) {
            for(var y = 0; y < height; y = y + height/20) {
                var px = x + Math.random()*width/20;
                var py = y + Math.random()*height/20;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }});
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

})();