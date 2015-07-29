//28 Bonfire: Convert HTML Entities
//Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

//quotes test are not working
function convert(str) {
  var htmlentities = {
    '&': '&amp;',
    '(': '&lpar;',
    ')' : '&rpar;',
    '<' : '&lt;',
    '>' :  '&gt;',
    "'" : '&#39;',
    '"' : '&#34;'
  };
  var output = str;
  // &colon;&rpar;
  for (var char in str){
    if (htmlentities[str[char]]){
      output = output.replace(str[char], htmlentities[str[char]]);
      
    }
  }
  return output;
}

convert("Shindler's List");
