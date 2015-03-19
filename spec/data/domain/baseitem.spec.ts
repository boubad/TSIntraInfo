//baseitem.spec.ts
//
/// <reference path='../../../src/typings/jasmine/jasmine.d.ts' />;
//
import BaseItem = require('../../../src/data/domain/baseitem');
//
describe('BaseItem Tests', () => {
  //
  // static methodes
  describe(' static  ',()=>{
    it("  date_format property ", () => {
      expect(BaseItem.date_format).toBeDefined();
      expect(BaseItem.date_format).toEqual('YYYY-MM-DD');
    });
    it(" check_date property  ", () => {
      var d:Date = new Date(2015,2,19);
      console.log('\n' + d.toString() + '\n');
      var dRet = BaseItem.check_date(d);
      expect(dRet).not.toBeNull();
      console.log(dRet.toString() + '\n');
      var sRet = BaseItem.date_to_string(d);
      expect(sRet).not.toBeNull();
      console.log(sRet + '\n');
      var xRet = BaseItem.string_to_date('2015-03-19');
      expect(xRet).not.toBeNull();
      console.log(xRet.toString() + '\n\n');
    });
  });
  // empty constructor
  describe(" empty constructor", () => {
    var data: BaseItem;
    beforeEach(function() {
      data = new BaseItem();
    });

    it(" id property ", () => {
      expect(data.id).toBeDefined();
      expect(data.id).toBeNull();
      expect(data.has_id).toBeDefined();
      expect(data.has_id).toEqual(false);
    });
    it(" rev property ", () => {
      expect(data.rev).toBeDefined();
      expect(data.rev).toBeNull();
      expect(data.has_rev).toBeDefined();
      expect(data.has_rev).toEqual(false);
    });
    it(" type property ", () => {
      expect(data.type).toBeDefined();
      expect(data.type).toBeNull();
      expect(data.has_type).toBeDefined();
      expect(data.has_type).toEqual(false);
    });
    it(" collection_name property ", () => {
      expect(data.collection_name).toBeDefined();
      expect(data.collection_name).toBeNull();
      expect(data.has_collection_name).toBeDefined();
      expect(data.has_collection_name).toEqual(false);
    });
    it(" is_storeable property ", () => {
      expect(data.is_storeable).toBeDefined();
      expect(data.is_storeable).toEqual(false);
    });
    it(" to_insert_map ", () => {
      expect(data.to_insert_map).toBeDefined();
      var oMap: any = {};
      data.to_insert_map(oMap);
      expect(oMap.type).not.toBeDefined();
    });
    it(" to_fetch_map ", () => {
      expect(data.to_fetch_map).toBeDefined();
      var oMap: any = {};
      data.to_fetch_map(oMap);
      expect(oMap.type).not.toBeDefined();
      expect(oMap._id).not.toBeDefined();
      expect(oMap._rev).not.toBeDefined();
    });
    //
  });
  // normal constructor
  describe(" empty constructor", () => {
    var data: BaseItem;
    var id:any = 100;
    var rev:any = 3;
    beforeEach(function() {
      var oMap: any = { _id: id, _rev: rev };
      data = new BaseItem(oMap);
    });
    it(" id property ", () => {
      expect(data.id).toEqual(id);
      expect(data.has_id).toEqual(true);
    });
    it(" rev property ", () => {
      expect(data.rev).toEqual(rev);
      expect(data.has_rev).toEqual(true);
    });
    it(" type property ", () => {
      expect(data.type).toBeDefined();
      expect(data.type).toBeNull();
      expect(data.has_type).toBeDefined();
      expect(data.has_type).toEqual(false);
    });
    it(" collection_name property ", () => {
      expect(data.collection_name).toBeDefined();
      expect(data.collection_name).toBeNull();
      expect(data.has_collection_name).toBeDefined();
      expect(data.has_collection_name).toEqual(false);
    });
    it(" is_storeable property ", () => {
      expect(data.is_storeable).toBeDefined();
      expect(data.is_storeable).toEqual(false);
    });
    it(" to_insert_map ", () => {
      expect(data.to_insert_map).toBeDefined();
      var oMap: any = {};
      data.to_insert_map(oMap);
      expect(oMap.type).not.toBeDefined();
      expect(oMap._id).not.toBeDefined();
      expect(oMap._rev).not.toBeDefined();
    });
    it(" to_fetch_map ", () => {
      expect(data.to_fetch_map).toBeDefined();
      var oMap: any = {};
      data.to_fetch_map(oMap);
      expect(oMap.type).not.toBeDefined();
      expect(oMap._id).toEqual(id);
      expect(oMap._rev).toEqual(rev);
    });
    //
  });

});
