sf.ui.proTools.getMenuItem('Setup', 'Playback Engine...').elementClick();

var dlg = sf.ui.proTools.windows.whoseTitle.is('Playback Engine').first.elementWaitFor().element;

dlg.popupButtons.allItems[1].popupMenuSelect({
    menuPath: ['1024 Samples']
});

sf.ui.proTools.windows.whoseTitle.is("Playback Engine").first.checkBoxes.whoseTitle.is("Optimize Performance at Low Buffer Sizes").first.checkboxSet({
    targetValue: "Disable",
});

dlg.buttons.whoseTitle.is('OK').first.elementClick();
