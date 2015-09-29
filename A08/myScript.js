function showonlyone(faqChoice) {
    $('.faqBoxes').each(function(index) {
        if ($(this).attr("id") == faqChoice) {
            $(this).show(200);
        }
        else {
            $(this).hide(600);
        }
    });
}