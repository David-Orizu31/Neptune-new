$('body').on('click', '.toggle-filters', function() {
    var $this = $(this),
        rangeWrapper = $('.range-slider-wrapper'),
        advancedFilters = $('.advanced-filters');

    if(!rangeWrapper.hasClass('filters-expanded')) {

        $this.html('Hide advanced filters');
        rangeWrapper.addClass('filters-expanded');
        advancedFilters.slideDown();

        $('.slider').each(function() {
            var minValue = Number($(this).find('.min-value').attr('data-selected-value')),
                maxValue = Number($(this).attr('data-max')),
                value = Number($(this).attr('data-value')),
                step = Number($(this).attr('data-step')),
                $this = $(this);

            $this.slider({
                range: true,
                values: [minValue, maxValue],
                slide: function(event, ui) {
                    var selectedMin = ui.values[0],
                        selectedMax = ui.values[1],
                        currentValueMin = selectedMin,
                        currentValueMax = selectedMax;
                    if(selectedMin > 999) {
                        currentValueMin = selectedMin / 1000 + 'k';
                        currentValueMax = selectedMax / 1000 + 'k';
                    }

                    $this.find('.min-value').html(currentValueMin).attr('data-selected-value', selectedMin);
                    $this.find('.max-value').html(currentValueMax).attr('data-selected-value', selectedMax);
                }

            });

            var currentValueMin = minValue,
                currentValueMax = maxValue;
            if(currentValueMin > 999) {
                currentValueMin = currentValueMin / 1000 + 'k';
                currentValueMax = currentValueMax / 1000 + 'k';
            }

            $this.find('span[tabindex]:first-of-type .value').html(currentValueMin).attr('data-selected-value', minValue);
            $this.find('span[tabindex]:last-of-type').append('<span class="value max-value" data-selected-value></span>').find('.value').html(currentValueMax).attr('data-selected-value', maxValue);
        });

    } else {

        $this.html('Show advanced filters');
        rangeWrapper.removeClass('filters-expanded');
        advancedFilters.slideUp();

        $('.slider').each(function() {
            var value = Number($(this).attr('data-value')),
                $this = $(this);

            $this.slider({
                value: value,
                range: 'min',
                slide: function(event, ui) {
                    var currentValue = ui.value;
                    if(currentValue > 999) {
                        currentValue = currentValue / 1000 + 'k';
                    }
                    $(this).find('.value').html(currentValue).attr('data-selected-value', ui.value);
                }
            });

        });
    }
});

$('.slider').each(function() {
    var minValue = Number($(this).attr('data-min')),
        maxValue = Number($(this).attr('data-max')),
        value = Number($(this).attr('data-value')),
        step = Number($(this).attr('data-step')),
        $this = $(this);

    $this.slider({
        range: 'min',
        value: value,
        min: minValue,
        max: maxValue,
        step: step,
        slide: function(event, ui) {
            var currentValue = ui.value;
            if(currentValue > 999) {
                currentValue = currentValue / 1000 + 'k';
            }
            $(this).find('.value').html(currentValue).attr('data-selected-value', ui.value);
        }
    });

    var sliderHandle = $this.find('.ui-slider-handle'),
        currentValue = sliderHandle.parent().attr('data-value');
    sliderHandle.append('<span class="value min-value" data-selected-value="'+ currentValue +'"></span>');

    if(minValue > 999) {
        value = value / 1000 + 'k';
    }
    $this.find('.value').html(value);
});