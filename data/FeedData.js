(function (FeedData) { 

FeedData.initOpcodes = 
[
        {
        name : "AllOps",
        elements : [
        {
            Opname : "Build",
            Opcommands : [{
                    OpcommandName : "Build",
                    OpDescription : "This op is used for running build",
                    OpId : 1,
                    OpCategory : "Build"
                }]
        },
        {
            Opname : "Perf Runs",
            Opcommands : [{
                    OpcommandName : "Per Run",
                    OpDescription : "This op is used for perf runs",
                    OpId : 2,
                    OpCategory : "Perf Runs"
                }]
        },
        {
            Opname : "Smokes",
            Opcommands : [{
                    OpcommandName : "Smokes",
                    OpDescription : "This op is used for running smokes",
                    OpId : 3,
                    OpCategory : "Smokes"
                }]
        }]
        },
        {
            name : "users",
            elements : [{
                    UserName : "suseendr",
                    workspaceNames : [
                        {
                            workspaceName : "suseendr/test",
                            workspaceId : 1
                        }, 
                        {
                            workspaceName : "suseendr/test1",
                            workspaceId : 2
                        }],
                        vsimNames : [
                        {
                            vsimName : "suseendr/testVsim",
                            vsimId : 1
                        }, 
                        {
                            vsimName : "suseendr/testVsim1",
                            vsimId : 2
                        }],
                   
                }, 
                {
                    UserName : "tvidya",
                    workspaceNames : [
                        {
                            workspaceName : "tvidya/test",
                            workspaceId : 1
                        }, 
                        {
                            workspaceName : "tvidy/test1",
                            workspaceId : 2
                        }],
                    vsimNames : [
                        {
                            vsimName : "tvidya/testVsim",
                            vsimId : 1
                        }, 
                        {
                            vsimName : "tvidya/testVsim1",
                            vsimId : 2
                        }],
                }]
        }];

})(module.exports);