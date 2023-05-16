AFRAME.registerComponent('pacman-enemy', {
    init: function () {
      this.el.setAttribute('geometry', {
        primitive: 'circle',
        radius: 0.5,
        segments: 32
      });
      this.el.setAttribute('material', {
        color: 'red',
        shader: 'flat'
      });
      this.el.setAttribute('position', {
        x: Math.floor(Math.random() * 20) - 10,
        y: 0.5,
        z: Math.floor(Math.random() * 20) - 10
      });
    },
    
    tick: function (time, timeDelta) {
      // Move the enemy towards the player
      var player = document.querySelector('#player');
      var enemyPosition = this.el.getAttribute('position');
      var playerPosition = player.getAttribute('position');
      var direction = new THREE.Vector3();
      direction.subVectors(playerPosition, enemyPosition).normalize();
      this.el.object3D.position.addScaledVector(direction, timeDelta / 1000);
    }
  });
  