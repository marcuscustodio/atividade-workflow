function makeArray(e){for(var t=1;t<=e;t++)this[t]=0;return this}function isEmpty(e){return null==e||0==e.length}function isWhitespace(e){var t;if(isEmpty(e))return!0;for(t=0;t<e.length;t++){var r=e.charAt(t);if(whitespace.indexOf(r)==-1)return!1}return!0}function stripCharsInBag(e,t){var r,n="";for(r=0;r<e.length;r++){var a=e.charAt(r);t.indexOf(a)==-1&&(n+=a)}return n}function stripCharsNotInBag(e,t){var r,n="";for(r=0;r<e.length;r++){var a=e.charAt(r);t.indexOf(a)!=-1&&(n+=a)}return n}function stripWhitespace(e){return stripCharsInBag(e,whitespace)}function charInString(e,t){for(i=0;i<t.length;i++)if(t.charAt(i)==e)return!0;return!1}function stripInitialWhitespace(e){for(var t=0;t<e.length&&charInString(e.charAt(t),whitespace);)t++;return e.substring(t,e.length)}function isLetter(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"}function isDigit(e){return e>="0"&&e<="9"}function isLetterOrDigit(e){return isLetter(e)||isDigit(e)}function isInteger(e){var t;if(isEmpty(e))return 1==isInteger.arguments.length?defaultEmptyOK:1==isInteger.arguments[1];for(t=0;t<e.length;t++){var r=e.charAt(t);if(!isDigit(r))return!1}return!0}function isSignedInteger(e){if(isEmpty(e))return 1==isSignedInteger.arguments.length?defaultEmptyOK:1==isSignedInteger.arguments[1];var t=0,r=defaultEmptyOK;return isSignedInteger.arguments.length>1&&(r=isSignedInteger.arguments[1]),"-"!=e.charAt(0)&&"+"!=e.charAt(0)||(t=1),isInteger(e.substring(t,e.length),r)}function isPositiveInteger(e){var t=defaultEmptyOK;return isPositiveInteger.arguments.length>1&&(t=isPositiveInteger.arguments[1]),isSignedInteger(e,t)&&(isEmpty(e)&&t||parseInt(e,10)>0)}function isNonnegativeInteger(e){var t=defaultEmptyOK;return isNonnegativeInteger.arguments.length>1&&(t=isNonnegativeInteger.arguments[1]),isSignedInteger(e,t)&&(isEmpty(e)&&t||parseInt(e,10)>=0)}function isNegativeInteger(e){var t=defaultEmptyOK;return isNegativeInteger.arguments.length>1&&(t=isNegativeInteger.arguments[1]),isSignedInteger(e,t)&&(isEmpty(e)&&t||parseInt(e,10)<0)}function isNonpositiveInteger(e){var t=defaultEmptyOK;return isNonpositiveInteger.arguments.length>1&&(t=isNonpositiveInteger.arguments[1]),isSignedInteger(e,t)&&(isEmpty(e)&&t||parseInt(e,10)<=0)}function isFloat(e){var t,r=!1;if(isEmpty(e))return 1==isFloat.arguments.length?defaultEmptyOK:1==isFloat.arguments[1];if(e==decimalPointDelimiter)return!1;for(t=0;t<e.length;t++){var n=e.charAt(t);if(n!=decimalPointDelimiter||r){if(!isDigit(n))return!1}else r=!0}return!0}function isSignedFloat(e){if(isEmpty(e))return 1==isSignedFloat.arguments.length?defaultEmptyOK:1==isSignedFloat.arguments[1];var t=0,r=defaultEmptyOK;return isSignedFloat.arguments.length>1&&(r=isSignedFloat.arguments[1]),"-"!=e.charAt(0)&&"+"!=e.charAt(0)||(t=1),isFloat(e.substring(t,e.length),r)}function isAlphabetic(e){var t;if(isEmpty(e))return 1==isAlphabetic.arguments.length?defaultEmptyOK:1==isAlphabetic.arguments[1];for(t=0;t<e.length;t++){var r=e.charAt(t);if(!isLetter(r))return!1}return!0}function isAlphanumeric(e){var t;if(isEmpty(e))return 1==isAlphanumeric.arguments.length?defaultEmptyOK:1==isAlphanumeric.arguments[1];for(t=0;t<e.length;t++){var r=e.charAt(t);if(!isLetter(r)&&!isDigit(r))return!1}return!0}function reformat(e){for(var t,r=0,n="",a=1;a<reformat.arguments.length;a++)t=reformat.arguments[a],a%2==1?n+=t:(n+=e.substring(r,r+t),r+=t);return n}function isIntegerInRange(e,t,r){if(isEmpty(e))return 1==isIntegerInRange.arguments.length?defaultEmptyOK:1==isIntegerInRange.arguments[1];if(!isInteger(e,!1))return!1;var n=parseInt(e,10);return n>=t&&n<=r}function CompletaString(e,t){var r,n;if(n=new String,n=e,n.length>t)r=n.substring(0,t);else for(r=n,j=n.length;j<t;j++)r+=" ";return r}function CompletaNumero2(e,t){var r,n;if(n=new String(e),r="",n.length>t)r=n.substring(0,t);else for(r=n,j=n.length;j<t;j++)r="0"+r;return r}function checkRadio(e){for(var t=0;t<e.length;t++)if(e[t].checked)return!0;return!1}function RadioValue(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t].value;return""}function checkInput(e){return""!=e.value&&!isWhitespace(e.value)}function Limpar(){document.form1.periodo.value="",document.form1.juros.value="",document.form1.parcela.value="",document.form1.montante.value=""}function Calcular(e){var t;if(checkInput(document.form1.periodo))if(checkInput(document.form1.juros))if(checkInput(document.form1.parcela)){if(checkInput(document.form1.montante))return void alert("Preencha apenas 3 valores para calcular o 4º.");if(!checkInput(document.form1.juros)||!checkInput(document.form1.parcela)||!checkInput(document.form1.periodo))return void alert("Preencha 3 valores para calcular o 4º.");e=4}else{if(!checkInput(document.form1.periodo)||!checkInput(document.form1.juros)||!checkInput(document.form1.montante))return void alert("Preencha 3 valores para calcular o 4º.");e=3}else{if(!checkInput(document.form1.periodo)||!checkInput(document.form1.parcela)||!checkInput(document.form1.montante))return void alert("Preencha 3 valores para calcular o 4º.");e=2}else{if(!checkInput(document.form1.juros)||!checkInput(document.form1.parcela)||!checkInput(document.form1.montante))return void alert("Preencha 3 valores para calcular o 4º.");e=1}if(1!=e){if(t=document.form1.periodo.value,t=t.replace(",","."),!isFloat(t))return void alert("Período deve ser um valor inteiro.");per_int=parseFloat(t)}if(2!=e){if(t=document.form1.juros.value,t=t.replace(",","."),!isFloat(t))return void alert("Taxa de Juros deve ser um valor númerico, tendo a vírgula(,) como delimitador da parte fracionária.");juros_float=parseFloat(t)/100}if(3!=e){if(t=document.form1.parcela.value,t=t.replace(",","."),!isFloat(t))return void alert("Valor da prestação deve ser um valor númerico, tendo a vírgula(,) como delimitador dos centavos.");parcela_float=parseFloat(t)}if(4!=e){if(t=document.form1.montante.value,t=t.replace(",","."),!isFloat(t))return void alert("Valor do Financiamento deve ser um valor númerico maior que zero, tendo a vírgula(,) como delimitador dos centavos.");montante_float=parseFloat(t)}if(1==e){per_int=Math.log(1-montante_float*juros_float/parcela_float)/Math.log(1/(1+juros_float)),per_int=Math.round(100*per_int)/100;var t=String(per_int);i=t.indexOf("."),i!=-1&&(t=t.substring(0,i)+","+t.substring(i+1,t.length)),document.form1.periodo.value=t}if(2==e){juros_inicial=parseFloat("-1"),juros_final=parseFloat("99999"),suposto_juros=parseFloat("0"),suposto_parcela=parseFloat("0");for(var r=1,n=!1;;){if(suposto_juros=(juros_final+juros_inicial)/2,suposto_parcela=montante_float*suposto_juros/(1-Math.pow(1/(1+suposto_juros),per_int)),suposta_diferenca=Math.abs(parcela_float-suposto_parcela),!(suposta_diferenca>1e-9)){n=!0;break}if(suposto_parcela>parcela_float?juros_final=suposto_juros:juros_inicial=suposto_juros,r>5e3)break;r++}if(0!=n){suposto_juros!=-100&&(suposto_juros*=100),juros_float=Math.round(1e5*suposto_juros)/1e5;var t=String(juros_float);return i=t.indexOf("."),i!=-1&&(t=t.substring(0,i)+","+t.substring(i+1,t.length)),void(document.form1.juros.value=t)}document.form1.juros.value="NaN"}if(3==e){parcela_float=montante_float*juros_float/(1-Math.pow(1/(1+juros_float),per_int)),parcela_float=Math.round(100*parcela_float)/100;var t=String(parcela_float);return i=t.indexOf("."),i!=-1&&(t=t.substring(0,i)+","+t.substring(i+1,t.length)),void(document.form1.parcela.value=t)}if(4==e){montante_float=parcela_float*(1-Math.pow(1/(1+juros_float),per_int))/juros_float,montante_float=Math.round(100*montante_float)/100;var t=String(montante_float);return i=t.indexOf("."),i!=-1&&(t=t.substring(0,i)+","+t.substring(i+1,t.length)),void(document.form1.montante.value=t)}}var digits="0123456789",lowercaseLetters="abcdefghijklmnopqrstuvwxyz",uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ",whitespace=" \t\n\r",decimalPointDelimiter=".",iDay="O dia da data deve estar entre 1 e 31.  Por favor corrija.",iMonth="O mês da data deve estar 1 e 12.  Por favor corrija.",icpfcgc="O CPF/CNPJ é inválido. Por favor corrija.",iYear="O ano deve ter 2 ou 4 dígitos.  Por favor corrija.",iDatePrefix="",iDateSuffix=" não é uma data válida.  Por favor corrija.",pEntryPrompt="Por favor entre um ",pDay="número de dia entre 1 e 31.",pMonth="número de mês entre 1 e 12.",pYear="número de ano com 2 ou 4 dígitos.",defaultEmptyOK=!1,daysInMonth=makeArray(12);daysInMonth[1]=31,daysInMonth[2]=29,daysInMonth[3]=31,daysInMonth[4]=30,daysInMonth[5]=31,daysInMonth[6]=30,daysInMonth[7]=31,daysInMonth[8]=31,daysInMonth[9]=30,daysInMonth[10]=31,daysInMonth[11]=30,daysInMonth[12]=31;];
       if (i % 2 == 1) resultString += arg;
       else {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}

function isIntegerInRange (s, a, b)
{   if (isEmpty(s)) 
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);

    // Catch non-integer strings to avoid creating a NaN below,
    // which isn't available on JavaScript 1.0 for Windows.
    if (!isInteger(s, false)) return false;

    // Now, explicitly change the type to integer via parseInt
    // so that the comparison code below will work both on 
    // JavaScript 1.2 (which typechecks in equality comparisons)
    // and JavaScript 1.1 and before (which doesn't).
    var num = parseInt (s,10);
    return ((num >= a) && (num <= b));
}

function CompletaString(s,i)
{
	var t,u
	u = new String()
	
	u = s
	
	if (u.length > i)
	{
		
		t = u.substring(0,i)
	}
	else
	{
		t = u	
		for (j=u.length;j<i;j++)
		{
		  t = t + " "	
		}
 	}
 	return t
}

function CompletaNumero2(s,i)
{
	var t,u
	u = new String(s)
	
	
	t = ""
	
	
	if (u.length > i)
	{
		
		t = u.substring(0,i)
	}
	else
	{
		t = u	
		for (j=u.length;j<i;j++)
		{
		  t = "0" + t	
		}
 	}
 	
 	return t
}
	




function checkRadio(r)
{
	for (var i=0; i < r.length; i++)
	{
		if (r[i].checked)
		{
			return true
		}
	}
	return false
}

function RadioValue(r)
{
	for (var i=0; i < r.length; i++)
	{
		if (r[i].checked)
		{
			return r[i].value
		}
	}
	return ""
}

function checkInput(i)

{
	
	if (i.value == "" || isWhitespace(i.value))
	{
		
		return false
	}
	else
	{
		return true
	}
	
	
}

  function Limpar()
  {
   document.form1.periodo.value = ""
   document.form1.juros.value = ""
   document.form1.parcela.value = ""
   document.form1.montante.value = ""
  }



  function Calcular(opcao)
  {
  var s
  if (!checkInput(document.form1.periodo)) {
        if (!checkInput(document.form1.juros) ||
            !checkInput(document.form1.parcela) ||
            !checkInput(document.form1.montante)) {
            alert("Preencha 3 valores para calcular o 4º.")
            return
        }
            opcao = 1
  } else
    if (!checkInput(document.form1.juros)) {
        if (!checkInput(document.form1.periodo) ||
            !checkInput(document.form1.parcela) ||
            !checkInput(document.form1.montante)) {
            alert("Preencha 3 valores para calcular o 4º.")
            return
        }
        opcao = 2
     } else
       if (!checkInput(document.form1.parcela)) {
              if (!checkInput(document.form1.periodo) ||
                  !checkInput(document.form1.juros) ||
                  !checkInput(document.form1.montante)) {
                  alert("Preencha 3 valores para calcular o 4º.")
                  return
              }
          opcao = 3
       } else
         if (!checkInput(document.form1.montante)) {
                if (!checkInput(document.form1.juros) ||
                    !checkInput(document.form1.parcela) ||
                    !checkInput(document.form1.periodo)) {
                    alert("Preencha 3 valores para calcular o 4º.")
                    return
                }
            opcao = 4
         } else {
                  alert("Preencha apenas 3 valores para calcular o 4º.")
                  return
           }

  if (opcao != 1) {
      s = document.form1.periodo.value
      s = s.replace(",", ".")
      if(!isFloat(s))
      {
        alert("Período deve ser um valor inteiro.")
        return
      }

      per_int = parseFloat(s)
  }

  if (opcao != 2) {

      s = document.form1.juros.value
      s = s.replace(",", ".")

        if(!isFloat(s))
        {
          alert("Taxa de Juros deve ser um valor númerico, tendo a vírgula(,) como delimitador da parte fracionária.")
          return
        }

        juros_float = parseFloat(s)/100


  }

  if (opcao != 3) {
      s = document.form1.parcela.value
      s = s.replace(",", ".")
          if(!isFloat(s))
          {
                alert("Valor da prestação deve ser um valor númerico, tendo a vírgula(,) como delimitador dos centavos.")
                return
          }

          parcela_float = parseFloat(s)


  }

  if (opcao != 4) {
      s = document.form1.montante.value
      s = s.replace(",", ".")

          if(!isFloat(s))
          {
                alert("Valor do Financiamento deve ser um valor númerico maior que zero, tendo a vírgula(,) como delimitador dos centavos.")
                return
          }

          montante_float = parseFloat(s)


  }

  if (opcao==1) {

    per_int = Math.log(1-(montante_float*juros_float/parcela_float))/Math.log(1/(1+juros_float))
    per_int = Math.round(per_int*100)/100

    var s = String(per_int)
    i = s.indexOf(".")
        if (i != -1)
        {
                s = s.substring(0,i) + "," + s.substring(i+1,s.length)

        }
    document.form1.periodo.value = s
  }

	if (opcao==2) {
		juros_inicial = parseFloat("-1")
		juros_final = parseFloat("99999")
		suposto_juros = parseFloat("0")
		suposto_parcela = parseFloat("0")
		var cont = 1
		var achou = false
		while (true) {
			suposto_juros = (juros_final + juros_inicial)/2
			suposto_parcela = (montante_float*suposto_juros)/(1-Math.pow(1/(1+suposto_juros),per_int))
			suposta_diferenca = Math.abs(parcela_float-suposto_parcela)
			if (suposta_diferenca > 0.000000001) {
				if (suposto_parcela > parcela_float) {
					juros_final = suposto_juros
				}
				else {
					juros_inicial = suposto_juros
				}
			}
			else {
				achou = true
				break
			}
			if (cont > 5000) {
				break
			}
			cont++
		}
		if (achou==false) {
			document.form1.juros.value = "NaN"
		}
		else {
			if (suposto_juros!=-100) {
				suposto_juros = suposto_juros*100
			}
			juros_float = Math.round(suposto_juros*100000)/100000
			var s = String(juros_float)
			i = s.indexOf(".")
			if (i != -1) {
				s = s.substring(0,i) + "," + s.substring(i+1,s.length)
			}
			document.form1.juros.value = s
			return
		}
	}

	if (opcao==3) {
		parcela_float = (montante_float*juros_float)/(1 - Math.pow(1/(1+juros_float),per_int))
		parcela_float = Math.round(parcela_float*100)/100
		var s = String(parcela_float)
		i = s.indexOf(".")
		if (i != -1) {
			s = s.substring(0,i) + "," + s.substring(i+1,s.length)
		}
		document.form1.parcela.value = s
		return
	}

	if (opcao==4) {
		montante_float = (parcela_float*(1 - Math.pow(1/(1+juros_float),per_int))/juros_float)
		montante_float = Math.round(montante_float*100)/100
		var s = String(montante_float)
		i = s.indexOf(".")
		if (i != -1) {
			s = s.substring(0,i) + "," + s.substring(i+1,s.length)
		}
		document.form1.montante.value = s
		return
	}
}

