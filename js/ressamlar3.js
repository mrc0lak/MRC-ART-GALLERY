document.getElementById('arama').addEventListener('keyup', function (a) 
{
    document.getElementById('ara').setAttribute('href', 'http://' + window.location.host + '#' + document.getElementById('arama').value.replaceAll(' ', '').toLowerCase())
})