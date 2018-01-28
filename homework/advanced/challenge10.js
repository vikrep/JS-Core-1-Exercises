/*Challenge 8: Athlete

Now we are going to create an athlete object that can drink from the bottle we created 
in the last challenge.

Our athlete should hold values for their hydration level and the distance 
they have travelled. 

They should be able to run and drink.

When they run their hydration level should decrease while their distance should 
increase.

Our athlete should not be able to run if their hydration level is less than or equal to 0.

When our athlete drinks their hydration should increase.

--EXTRA--

Really our athlete should only be able to drink if the bottles volume is more than 0 - see
if you can add a conditional to your athletes drink function that only allows them
to drink if your bottle is not empty.
Tip: you will need to research node require




*/
var bottle = {
    volume: 0,
    fill: function(){
        return this.volume = 100;// calling this function should make you bottles volume = 100; 
    },
    drink: function(){
        return this.volume -= 10 ;// calling this function should decrease your bottles volume by 10;
    },
    empty: function(){
        if(!this.volume)
        return true;// this function should return true if your bottles volumn = 0
    }
}
var athlete = {
    hydration: 0,
    distance: 0,
    run: function(){
        if(this.hydration > 0){
        this.hydration--;
        this.distance++;
        }
    },
    drink: function(){
        if(!bottle.empty())
        return this.hydration++;
    },
};
bottle.fill();
bottle.drink();
bottle.drink();
bottle.drink();

if(!bottle.empty()){
	console.log('bottles volume = ' + bottle.volume);
};

athlete.run();
athlete.drink();
athlete.drink();
athlete.drink();
athlete.drink();
athlete.run();
athlete.run();
athlete.run();
console.log(athlete.hydration);
console.log(athlete.distance);



