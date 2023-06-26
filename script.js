// complete the given function

function palindrome(str){
  let pal=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

	return pal=== str.split('').reverse().join('');
}
module.exports = palindrome
