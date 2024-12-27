function skillsMumber() {
    return {
        restrict: 'E',
        template: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        screen:{
            member: '='
        }
    }
}