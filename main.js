function Speaker (givenName, surname, email, biography, isActive = true) {
this.givenName = givenName
this.surname = surname
this.email = email
this.biography = biography
}

Speaker.prototype = {
    getBiography: function(){
        console.log(this.givenName+" "+this.surname +" "+ this.biography)
    },

    makeInactive: function(date){
        this.isActive = false
        this.inactiveDate = date
        console.log(this.inactiveDate)
    },










}

function KeynoteSpeaker (givenName, surname, email, biography, websites, keynoteTopics, breakouts, isActive = true){
    this.websites = websites
    this.websites = []
    this.keynoteTopics = keynoteTopics
    this.keynoteTopics = []
    this.breakouts = breakouts
    this.breakouts = []
    Speaker.call(this, givenName, surname, email, biography, isActive = true)
    
    
    
}

function WorkshopSpeaker (givenName, surname, email, biography, workshopTopics, isActive = true){
    this.workshopTopics = workshopTopics
    this.workshopTopics = []
    Speaker.call(this, givenName, surname, email, biography, isActive = true)
    
    
}

KeynoteSpeaker.prototype = Object.create(Speaker.prototype)
KeynoteSpeaker.prototype.constructor = KeynoteSpeaker
WorkshopSpeaker.prototype = Object.create(Speaker.prototype)
WorkshopSpeaker.prototype.constructor = WorkshopSpeaker

const taylor = new Speaker("Taylor", "Gentry", "myemail", "mybiography")
const mikaiyl = new KeynoteSpeaker("Mikaiyl", "Davis", "hisemail", "hisbiography", "his websites", "histopics", "dontknowwhatbreakoutsare")
const brian = new WorkshopSpeaker("Brian", "Schuessler", "brianemail", "brianbiography", "briantopics")
console.log(taylor.getBiography())
console.log(mikaiyl.getBiography())