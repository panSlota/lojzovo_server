/**
 * a simple class containing info about time
 * just for testing purposes, nothing big
 * @author pan Slota
 * @version 1.0
 */
class Time{

    /**
     * main attribute of this class, has to be perfectly formatted (checked via regex function)
     * type string (then converted to ints)
     */
    format; //"HH:mm:ss.ddd"

    /**
     * constructor, takes string in a defined format as argument
     * if the string format is not valid, an error message is displayed
     * @param format string
     */
    constructor(format){
        if (Time.isValid(format))
        this.format = format;
        else alert("wrong time format!");
    }

    /**
     * i do not know why this is there, but whatever
     * @returns formatted string
     */
    toString(){
        return this.format;
    }

    /**
     * takes the seconds from the format ([6] - [8])
     * @returns seconds as number
     */
    seconds(){
        var sec = this.format.substr(6, 2);
        return parseInt(sec, 10);
    }

    /**
     * takes the minutes from the format ([3] - [5])
     * @returns minutes as number
     */
    minutes(){
        var min = this.format.substr(3,2);
        return parseInt(min, 10);
    }

    /**
     * takes the hours from the format ([0] - [2])
     * @returns hours as number
     */
    hours(){
        var hour = this.format.substr(0,2);
        return parseInt(hour);
    }

    /**
     * checks if the string has a correct format
     * @param input string to be checked
     * @returns bool
     */
    static isValid(input){
        var correctFormatRegex = new RegExp('^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)(\.(\d{1,9}))?$'); // crazy regEx that I stole somewhere
        return input.match(correctFormatRegex).length == 1;
    }
}