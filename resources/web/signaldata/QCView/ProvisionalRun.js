/*
 * Copyright (c) 2016 LabKey Corporation
 *
 * Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
 */
Ext4.define('LABKEY.SignalData.ProvisionalRun', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name'},
        {name: 'fileExt'},
        {name: 'filePath'},
        {name: 'expDataRun'}
    ]
});

Ext4.define('LABKEY.SignalData.Standard', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'Key', type: 'int'},
        {name: 'Name'},
        {name: 'provisionalRun'}
    ]
});

Ext4.define('LABKEY.SignalData.StandardSource', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'key', type: 'int'},
        {name: 'expDataRun'},
        {name: 'standard', type: 'int'}, // lookup to Standard.key
        {name: 'name'},
        {name: 'concentration', type: 'float'},
        {name: 'xleft', type: 'float', defaultValue: ''},
        {name: 'xright', type: 'float'},
        {name: 'base', type: 'float'},
        {name: 'auc', type: 'float'},
        {name: 'peakMax', type: 'float'},
        {name: 'peakResponse', type: 'float'},
        {name: 'filePath'},
        {name: 'fileName'},
        {name: 'fileExt'}
    ]
});

Ext4.define('LABKEY.SignalData.Sample', {
    extend: 'LABKEY.SignalData.StandardSource',

    fields: [
        {name: 'include', type: 'boolean', defaultValue: true}
    ]
});
