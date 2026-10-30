function domainName(url){
  url = url.replace('http://', '');
    url = url.replace('https://', '');
  
  if(url.startsWith('www.')){
    url = url.slice(4);
  }
  return url.split('.')[0];
}