function checkPalindrome(string)
{
    /* find the length of a string */
    const len = string.length;

    /*loop through half of the String */

    for(let i = 0; i<len/2; i++)
    {
        /* check if first and last  String is same */

        if(string[i] !== string[len-1-i])
        {
            return 'It is not a Palindrome';
        }
    } 

    return 'It is a palindrome';
}

const string = 'MOm';
const value =  checkPalindrome(string);
console.log(value);