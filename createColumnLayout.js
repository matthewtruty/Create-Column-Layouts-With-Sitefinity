function createColumnLayout(itemsClassSelector,numCols) {
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

        switch (numCols) {
            case 2:
                item.twoColOuter(colCount);
                children.twoColInner(colCount);
                break;
            case 3:
                item.threeColOuter(colCount);
                children.threeColInner(colCount);
                break;
            case 4:
                item.fourColOuter(colCount);
                children.fourColInner(colCount);
                break;
            case 5:
                item.fiveColOuter(colCount);
                children.fiveColInner(colCount);
                break;
            case 6:
                item.twoColOuter(colCount);
                children.threeColInner(colCount);
                break;
            default:
                console.log("No case met in switch statement. Check the number of columns parameter in the method call. ");
        }

        var t = c % 2;
        if (t === 1) {
            children.addClass("alt");
        }
        colCount++;
        if (colCount > numCols) {

            var cols = selectColumns(numCols, itemsClassSelector);

            if (!cols.parent().hasClass("sf_cols")) {
                cols.wrapAll("<div class='sf_cols'></div>");
            }

            colCount = 1;
            c++;
        }
    });
    if (items.length % numCols) {
        cols = $(itemsClassSelector + ".sf_colsOut").last();
        numFilledSiblings = cols.prevUntil(".sf_cols").length;

        if (!cols.parent().hasClass("sf_cols") && numFilledSiblings < (numCols - 1)) {
            colFillStartPos = numFilledSiblings + 2;

            cols.fillRow(numCols, colFillStartPos, itemsClassSelector);

            var cols = selectColumns(numCols, itemsClassSelector);

            if (!cols.parent().hasClass("sf_cols")) {
                cols.wrapAll("<div class='sf_cols'></div>");
            }
        }
    }
}

function selectColumns(numCols,itemsClassSelector) {
    switch (numCols) {
        case 2:
            return $(":not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_2cols_1_50," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_2cols_2_50");
            break;
        case 3:
            return $(":not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_3cols_1_33," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_3cols_2_34," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_3cols_3_33");
            break;
        case 4:
            return $(":not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_4cols_1_25," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_4cols_2_25," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_4cols_3_25," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_4cols_4_25");
            break;
        case 5:
            return $(":not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_5cols_1_20," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_5cols_2_20," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_5cols_3_20," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_5cols_4_20," + " :not(.sf_cols) > " + itemsClassSelector + ".sf_colsOut.sf_5cols_5_20");
            break;
        default:
            console.log("No case met in switch statement. Check the number of columns parameter in the method call. ");
    }
}

jQuery.fn.extend({
    twoColOuter: function (colCount) {
        return this.addClass("sf_colsOut sf_2cols_" + colCount + "_50");
    },
    twoColInner: function (colCount) {
        return this.addClass("sf_colsIn sf_2cols_" + colCount + "in_50");
    },
    threeColOuter: function (colCount) {
        if (colCount == 2) {
            return this.addClass("sf_colsOut sf_3cols_" + colCount + "_34");
        }
        else {
            return this.addClass("sf_colsOut sf_3cols_" + colCount + "_33");
        }
    },
    threeColInner: function (colCount) {
        if (colCount == 2) {
            return this.addClass("sf_colsIn sf_3cols_" + colCount + "in_34");
        }
        else {
            return this.addClass("sf_colsIn sf_3cols_" + colCount + "in_33");
        }
    },
    fourColOuter: function (colCount) {
            return this.addClass("sf_colsOut sf_4cols_" + colCount + "_25");
    },
    fourColInner: function (colCount) {
            return this.addClass("sf_colsIn sf_4cols_" + colCount + "in_25");
    },
    fiveColOuter: function (colCount) {
            return this.addClass("sf_colsOut sf_5cols_" + colCount + "_20");
    },
    fiveColInner: function (colCount) {
            return this.addClass("sf_colsIn sf_5cols_" + colCount + "in_20");
    },
    fillRow: function (numCols, colStartPos, itemsClassSelector) {
        var emptyColsHTML = "";
        switch (numCols) {
            case 2:
                return this.wrapAll("<div class='sf_cols'></div>").after("<div class='" + itemsClassSelector.replace(".", "") + " sf_colsOut sf_2cols_2_50'><div class='sf_colsIn sf_2cols_2in_50'></div></div>");
                break;
            case 3:
                for (i = colStartPos; i <= numCols; i++) {
                    if (i == 2) {
                        emptyColsHTML += "<div class='" + itemsClassSelector.replace(".", "") + " sf_colsOut sf_" + numCols + "cols_" + i + "_34'><div class='sf_colsIn sf_" + numCols + "cols_" + i + "in_34'></div></div>";
                    }
                    else {
                        emptyColsHTML += "<div class='" + itemsClassSelector.replace(".", "") + " sf_colsOut sf_" + numCols + "cols_" + i + "_33'><div class='sf_colsIn sf_" + numCols + "cols_" + i + "in_33'></div></div>";
                    }
                    
                }
                return this.after(emptyColsHTML);
                break;
            case 4:
                for (i = colStartPos; i <= numCols; i++) {
                    emptyColsHTML += "<div class='" + itemsClassSelector.replace(".", "") + " sf_colsOut sf_" + numCols + "cols_" + i + "_25'><div class='sf_colsIn sf_" + numCols + "cols_" + i + "in_25'></div></div>";
                }
                return this.after(emptyColsHTML);
                break;
            case 5:
                for (i = colStartPos; i <= numCols; i++) {
                    emptyColsHTML += "<div class='" + itemsClassSelector.replace(".", "") + " sf_colsOut sf_" + numCols + "cols_" + i + "_20'><div class='sf_colsIn sf_" + numCols + "cols_" + i + "in_20'></div></div>";
                }
                return this.after(emptyColsHTML);
                break;
            default:
                console.log("No case met in switch statement. Check the number of columns parameter in the method call. ");
        }
    }

});
