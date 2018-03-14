(function(scope) {var __layer_0__ = new Layer({"backgroundColor":"rgba(255,255,255,1)","width":375,"height":667,"constraintValues":{"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var track = new Layer({"parent":__layer_0__,"name":"track","borderWidth":1,"backgroundColor":"hsl(0, 0%, 98%)","width":102,"x":136,"borderColor":"hsla(0, 0%, 0%, 0.05)","height":64,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":64,"centerAnchorX":0.49866666666666665,"width":102,"top":null,"centerAnchorY":0.49925037481259371},"blending":"normal","borderRadius":200,"clip":false,"borderStyle":"solid","y":301});var knob = new Layer({"parent":track,"name":"knob","shadows":[{"spread":0,"x":0,"type":"box","y":6,"blur":12,"color":"hsla(0, 0%, 0%, 0.11)"},{"spread":0,"x":0,"type":"box","y":1,"blur":0,"color":"hsla(0, 0%, 0%, 0.2)"},{"spread":0,"x":0,"type":"box","y":2,"blur":4,"color":"hsla(0, 0%, 0%, 0.1)"}],"backgroundColor":"rgb(255, 255, 255)","width":56,"x":3,"height":56,"constraintValues":{"left":3,"aspectRatioLocked":true,"height":56,"centerAnchorX":0.30392156862745096,"width":56,"bottom":4,"top":4,"centerAnchorY":0.5},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid","y":4});var __layer_1__ = new Layer({"backgroundColor":"rgba(255,255,255,1)","width":375,"x":475,"height":667,"constraintValues":{"left":475,"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var trackActive = new Layer({"parent":__layer_1__,"name":"trackActive","borderWidth":1,"backgroundColor":"rgba(76, 217, 99, 1.00)","width":102,"x":137,"borderColor":"hsla(0, 0%, 0%, 0.05)","height":64,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":64,"centerAnchorX":0.5013333333333333,"width":102,"top":null,"centerAnchorY":0.50074962518740629},"blending":"normal","borderRadius":200,"clip":false,"borderStyle":"solid","y":302});var knobActive = new Layer({"parent":trackActive,"name":"knobActive","shadows":[{"spread":0,"x":0,"type":"box","y":6,"blur":12,"color":"hsla(0, 0%, 0%, 0.11)"},{"spread":0,"x":0,"type":"box","y":1,"blur":0,"color":"hsla(0, 0%, 0%, 0.2)"},{"spread":0,"x":0,"type":"box","y":2,"blur":4,"color":"hsla(0, 0%, 0%, 0.1)"}],"backgroundColor":"rgb(255, 255, 255)","width":56,"x":43,"height":56,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":56,"centerAnchorX":0.69607843137254899,"width":56,"bottom":4,"right":3,"top":4,"centerAnchorY":0.5},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid","y":4});if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|__layer_1__","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray","deviceName":"Apple iPhone 8"}};if(knob !== undefined){knob.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|knob","targetName":"knob","vekterClass":"FrameNode"}};if(trackActive !== undefined){trackActive.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|trackActive","targetName":"trackActive","vekterClass":"FrameNode"}};if(knobActive !== undefined){knobActive.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|knobActive","targetName":"knobActive","vekterClass":"FrameNode"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|__layer_0__","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray","deviceName":"Apple iPhone 8"}};if(track !== undefined){track.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|track","targetName":"track","vekterClass":"FrameNode"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {track, knob, trackActive, knobActive});scope["__vekterVariables"] = ["track", "knob", "trackActive", "knobActive"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);