function makePopup(url, width, height, overflow)
{
  if (width > 640) { width = 640; }
  if (height > 480) { height = 480; }

  if (overflow == '' || !/^(scroll|resize|both)$/.test(overflow))
  {
    overflow = 'both';
  }

  var win = window.open(url, '',
      'width=' + width + ',height=' + height
      + ',scrollbars=' + (/^(scroll|both)$/.test(overflow) ? 'yes' : 'no')
      + ',resizable=' + (/^(resize|both)$/.test(overflow) ? 'yes' : 'no')
      + ',status=yes,toolbar=no,menubar=no,location=no'
  );

  return win;
}