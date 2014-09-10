function createTwoColumnLayout(itemsClassSelector) {
    var colCount = 1;
    var c = 0;
    if (itemsClassSelector.indexOf(".") > -1) {
        items = $(itemsClassSelector);
    }
    else {
        items = $("." + itemsClassSelector);
        itemsClassSelector = "." + itemsClassSelector;
    }
    items.each(function () {
        var item = $(this);
        var children = item.children().first();
        item.addClass("sf_colsOut sf_2cols_" + colCount + "_50");
        children.addClass("sf_colsIn sf_2cols_" + colCount + "in_50");
        var t = c % 2;
        if (t === 1) {
            children.addClass("alt");
        }
        colCount++;
        if (colCount > 2) {
            var cols = $(":not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_2cols_1_50," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_2cols_2_50");

            if (!cols.parent().hasClass("sf_cols")) {
                cols.wrapAll("<div class='sf_cols'></div>");
            }
            colCount = 1;
            c++;
        }
    });
    if (items.length % 2) {
        cols = $(itemsClassSelector + ".sf_colsOut.sf_2cols_1_50").last();
        if (!cols.parent().hasClass("sf_cols") && cols.siblings(itemsClassSelector + ".sf_colsOut.sf_2cols_2_50").length === 0) {
            cols.wrapAll("<div class='sf_cols'></div>").after("<div class='" + itemsClassSelector.replace(".", "") + " sf_colsOut sf_2cols_2_50'><div class='sf_colsIn sf_2cols_2in_50'></div></div>");
        }
    }
}
