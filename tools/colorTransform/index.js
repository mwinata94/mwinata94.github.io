$(document).ready(() => {
  /* Default Values */
  $('#property-sample').val('backgroundColor');
  $('#color-sample-a').val('#7CFC00');
  $('#color-sample-b').val('#FF0000');
  $('#frame-sample').val(16);
  document.getElementById('color-sample-a-display').style.backgroundColor = $(
    '#color-sample-a'
  ).val();
  document.getElementById('color-sample-b-display').style.backgroundColor = $(
    '#color-sample-b'
  ).val();

  var interval = colorTransform(
    document.getElementById('ct_rect'),
    $('#property-sample').val(),
    $('#color-sample-a').val(),
    $('#color-sample-b').val(),
    $('#frame-sample').val()
  );

  $('#apply').click(() => {
    clearInterval(interval);
    interval = colorTransform(
      document.getElementById('ct_rect'),
      $('#property-sample').val(),
      $('#color-sample-a').val(),
      $('#color-sample-b').val(),
      $('#frame-sample').val()
    );
  });

  $('#color-sample-a').bind('input propertychange', () => {
    document.getElementById('color-sample-a-display').style.backgroundColor = $(
      '#color-sample-a'
    ).val();
  });

  $('#color-sample-b').bind('input propertychange', () => {
    document.getElementById('color-sample-b-display').style.backgroundColor = $(
      '#color-sample-b'
    ).val();
  });
});
