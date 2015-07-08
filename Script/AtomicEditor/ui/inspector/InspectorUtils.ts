
class InspectorUtils {

  static init() {

    var fd = InspectorUtils.attrFontDesc = new Atomic.UIFontDescription();
    fd.id = "Vera";
    fd.size = 11;

    // must not be void dor static initializer
    return null;

  }

  static createSeparator(parent:Atomic.UIWidget):Atomic.UISeparator {

    var sep = new Atomic.UISeparator();

    sep.gravity = Atomic.UI_GRAVITY_LEFT_RIGHT;
    sep.skinBg = "AESeparator";

    parent.addChild(sep);
    return sep;

  }

  static createAttrName(name:string):Atomic.UITextField {

    var nameField = new Atomic.UITextField();
    nameField.textAlign = Atomic.UI_TEXT_ALIGN_LEFT;
    nameField.skinBg = "InspectorTextAttrName";
    nameField.text = name;
    nameField.fontDescription = InspectorUtils.attrFontDesc;
    return nameField;
  }

  static createEditField():Atomic.UIEditField {

    var edit = new Atomic.UIEditField();
    edit.id = "editfield";
    edit.textAlign = Atomic.UI_TEXT_ALIGN_LEFT;
    edit.skinBg = "TBAttrEditorField";
    edit.fontDescription = InspectorUtils.attrFontDesc;
    var lp = new Atomic.UILayoutParams();
    lp.width = 140;
    edit.layoutParams = lp;

    return edit;

  }

  static createAttrEditField(name:string, parent:Atomic.UIWidget):Atomic.UIEditField {

    var attrLayout = new Atomic.UILayout();
    attrLayout.layoutDistribution = Atomic.UI_LAYOUT_DISTRIBUTION_GRAVITY;

    var _name = InspectorUtils.createAttrName(name);
    attrLayout.addChild(_name);

    var edit = InspectorUtils.createEditField();

    attrLayout.addChild(edit);
    parent.addChild(attrLayout);

    return edit;

  }

  // "static constructor"
  private static _init = InspectorUtils.init();
  private static attrFontDesc:Atomic.UIFontDescription;

}

export = InspectorUtils;
