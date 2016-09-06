function showPlace(placeId, button) {
    'use strict';
    $('.yoga-place').not(placeId).addClass('hidden');
    $(placeId).removeClass('hidden');
}
