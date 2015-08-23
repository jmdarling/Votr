angular.module('votr', [])
    .controller('VotrController', function() {
        var votr = this;
        votr.listItems = [
            'Chuy\s',
            'Cafe Brazil',
            '1050'
        ];

        votr.addListItem = function() {
            if(votr.listItemText != '') {
                votr.listItems.push(votr.listItemText);
                votr.listItemText = '';
            }
        };

        votr.removeListItem = function(index) {
            if(votr.listItems[index] === votr.selectedItem) {
                votr.selectedItem = null;
            }

            votr.listItems.splice(index, 1);
        };

        votr.pickItem = function() {
            votr.selectedItem = votr.listItems[Math.floor(Math.random()*votr.listItems.length)];
        };
    });