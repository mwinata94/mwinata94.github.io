function colorTransform(
  selector,
  styleType,
  startColor,
  endColor,
  frameCount = 32
) {
  // Assign startColor
  selector.style[styleType] = startColor;

  // Store startRGB
  var sR = parseInt('0x' + startColor.substr(1, 2));
  var sG = parseInt('0x' + startColor.substr(3, 2));
  var sB = parseInt('0x' + startColor.substr(5, 2));
  // Store endRGB
  var eR = parseInt('0x' + endColor.substr(1, 2));
  var eG = parseInt('0x' + endColor.substr(3, 2));
  var eB = parseInt('0x' + endColor.substr(5, 2));
  // Store currentRGB
  var cR = sR;
  var cG = sG;
  var cB = sB;
  // Store floor_currentRGB
  var floor_cR = Math.floor(cR);
  var floor_cG = Math.floor(cG);
  var floor_cB = Math.floor(cB);
  // Store hexRGB
  var hexR = floor_cR.toString(16);
  var hexG = floor_cG.toString(16);
  var hexB = floor_cB.toString(16);
  //  css-Form hexRGB
  hexR = '00'.substr(hexR.length) + hexR;
  hexG = '00'.substr(hexG.length) + hexG;
  hexB = '00'.substr(hexB.length) + hexB;
  // Store offsetRGB
  var offsetR = sR == eR ? 0 : sR - eR;
  var offsetG = sG == eG ? 0 : sG - eG;
  var offsetB = sB == eB ? 0 : sB - eB;
  if ((sR == 0 && eR != 0) || (sR != 0 && eR == 0))
    offsetR += offsetR < 0 ? -1 : 1;
  if ((sG == 0 && eG != 0) || (sG != 0 && eG == 0))
    offsetG += offsetG < 0 ? -1 : 1;
  if ((sB == 0 && eB != 0) || (sB != 0 && eB == 0))
    offsetB += offsetB < 0 ? -1 : 1;
  // Store intervalRGB
  var intervalR = offsetR / frameCount;
  var intervalG = offsetG / frameCount;
  var intervalB = offsetB / frameCount;
  // Default Flag
  var getDirection = true;
  // MinMax Flag
  var minR, minG, minB;
  var maxR, maxG, maxB;
  if (sR != eR) {
    if (sR > eR) {
      maxR = sR;
      minR = eR;
      maxG = sG;
      minG = eG;
      maxB = sB;
      minB = eB;
    } else {
      maxR = eR;
      minR = sR;
      maxG = eG;
      minG = sG;
      maxB = eB;
      minB = sB;
    }
  } else if (sG != eG) {
    if (sG > eG) {
      maxR = sR;
      minR = eR;
      maxG = sG;
      minG = eG;
      maxB = sB;
      minB = eB;
    } else {
      maxR = eR;
      minR = sR;
      maxG = eG;
      minG = sG;
      maxB = eB;
      minB = sB;
    }
  } else if (sB != eB) {
    if (sB > eB) {
      maxR = sR;
      minR = eR;
      maxG = sG;
      minG = eG;
      maxB = sB;
      minB = eB;
    } else {
      maxR = eR;
      minR = sR;
      maxG = eG;
      minG = sG;
      maxB = eB;
      minB = sB;
    }
  } else {
    maxR = sR;
    minR = eR;
    maxG = sG;
    minG = eG;
    maxB = sB;
    minB = eB;
  }

  return setInterval(function() {
    if (getDirection) {
      cR -= intervalR;
      cG -= intervalG;
      cB -= intervalB;
    } else {
      cR += intervalR;
      cG += intervalG;
      cB += intervalB;
    }

    if (sR != eR) {
      if (cR >= maxR || cR <= minR) getDirection = !getDirection;
    } else if (sG != eG) {
      if (cG >= maxG || cG <= minG) getDirection = !getDirection;
    } else if (sB != eB) {
      if (cB >= maxB || cB <= minB) getDirection = !getDirection;
    }

    floor_cR = Math.floor(cR);
    floor_cG = Math.floor(cG);
    floor_cB = Math.floor(cB);

    hexR = floor_cR.toString(16);
    hexG = floor_cG.toString(16);
    hexB = floor_cB.toString(16);

    hexR = '00'.substr(hexR.length) + hexR;
    hexG = '00'.substr(hexG.length) + hexG;
    hexB = '00'.substr(hexB.length) + hexB;

    selector.style[styleType] = '#' + hexR + hexG + hexB;
  }, 1000 / frameCount);
}
