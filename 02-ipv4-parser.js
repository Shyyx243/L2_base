function ipv4Parser(ip, mask){
  const ipParts = ip.split('.');
  const maskParts = mask.split('.');
  const network =[];
  const host =[];
  for(let i = 0; i < 4;i++){
    const ipNum = Number(ipParts[i])
     const maskNum = Number(maskParts[i])
     network.push(ipNum & maskNum);
    host.push(ipNum - (ipNum & maskNum))

  }
  return [network.join('.'), host.join('.')];
}