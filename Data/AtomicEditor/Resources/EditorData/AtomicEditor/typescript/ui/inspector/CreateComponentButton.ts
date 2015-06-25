

var audioCreateSource = new Atomic.UIMenuItemSource();

audioCreateSource.addItem(new Atomic.UIMenuItem("SoundListener", "create component"));
audioCreateSource.addItem(new Atomic.UIMenuItem("SoundSource", "create component"));
audioCreateSource.addItem(new Atomic.UIMenuItem("SoundSource3D", "create component"));

var geometryCreateSource = new Atomic.UIMenuItemSource();

geometryCreateSource.addItem(new Atomic.UIMenuItem("AnimatedModel", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("BillboardSet", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("CustomGeometry", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("ParticleEmitter", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("Skybox", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("StaticModel", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("StaticModelGroup", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("Terrain", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("Text3D", "create component"));
geometryCreateSource.addItem(new Atomic.UIMenuItem("Water", "create component"));

var logicCreateSource = new Atomic.UIMenuItemSource();

logicCreateSource.addItem(new Atomic.UIMenuItem("AnimationController", "create component"));
logicCreateSource.addItem(new Atomic.UIMenuItem("Javascript Component", "create component"));
logicCreateSource.addItem(new Atomic.UIMenuItem("SplinePath", "create component"));

var navigationCreateSource = new Atomic.UIMenuItemSource();

navigationCreateSource.addItem(new Atomic.UIMenuItem("Navigable", "create component"));
navigationCreateSource.addItem(new Atomic.UIMenuItem("NavigationMesh", "create component"));
navigationCreateSource.addItem(new Atomic.UIMenuItem("OffMeshConnection", "create component"));

var networkCreateSource = new Atomic.UIMenuItemSource();

networkCreateSource.addItem(new Atomic.UIMenuItem("Network Priority", "create component"));

var physicsCreateSource = new Atomic.UIMenuItemSource();

physicsCreateSource.addItem(new Atomic.UIMenuItem("CollisionShape", "CollisionShape"));
physicsCreateSource.addItem(new Atomic.UIMenuItem("Constraint", "create component"));
physicsCreateSource.addItem(new Atomic.UIMenuItem("RigidBody", "RigidBody"));

var sceneCreateSource = new Atomic.UIMenuItemSource();

sceneCreateSource.addItem(new Atomic.UIMenuItem("Camera", "create component"));
sceneCreateSource.addItem(new Atomic.UIMenuItem("Light", "create component"));
sceneCreateSource.addItem(new Atomic.UIMenuItem("Zone", "create component"));

var subsystemCreateSource = new Atomic.UIMenuItemSource();

subsystemCreateSource.addItem(new Atomic.UIMenuItem("DebugRenderer", "create component"));
subsystemCreateSource.addItem(new Atomic.UIMenuItem("Octree", "create component"));
subsystemCreateSource.addItem(new Atomic.UIMenuItem("PhysicsWorld", "create component"));

var componentCreateSource = new Atomic.UIMenuItemSource();

var sources = {
    Audio: audioCreateSource,
    Geometry: geometryCreateSource,
    Logic: logicCreateSource,
    Navigation: navigationCreateSource,
    Network: networkCreateSource,
    Physics: physicsCreateSource,
    Scene: sceneCreateSource,
    SubSystem: subsystemCreateSource,
}

for (var sub in sources) {

    var item = new Atomic.UIMenuItem(sub);
    item.subSource = sources[sub];
    componentCreateSource.addItem(item);

}


class CreateComponentButton extends Atomic.UIButton {

    constructor(node: Atomic.Node) {

        super();

        this.node = node;

        this.fd.id = "Vera";
        this.fd.size = 11;

        this.text = "Create Component";

        this.subscribeToEvent("WidgetEvent", (data) => this.handleWidgetEvent(data));

    }

    // not instance method
    onClick = () => {

        var menu = new Atomic.UIMenuWindow(this, "create component popup");
        menu.fontDescription = this.fd;
        menu.show(componentCreateSource);
    }

    handleWidgetEvent(ev: Atomic.UIWidgetEvent) {

        if (ev.type != Atomic.UI_EVENT_TYPE_CLICK)
            return;

        if (ev.target && ev.target.id == "create component popup") {

            this.node.createComponent(ev.refid);

            return true;

        }

    }

    node: Atomic.Node;
    fd: Atomic.UIFontDescription = new Atomic.UIFontDescription();

}

export = CreateComponentButton;
