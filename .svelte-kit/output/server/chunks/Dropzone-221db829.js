import { c as create_ssr_component, p as createEventDispatcher, o as onDestroy, b as escape, d as add_attribute } from "./index-584434b3.js";
import { __awaiter, __generator, __spread } from "tslib";
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  ["avi", "video/avi"],
  ["gif", "image/gif"],
  ["ico", "image/x-icon"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["mp4", "video/mp4"],
  ["pdf", "application/pdf"],
  ["png", "image/png"],
  ["zip", "application/zip"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
]);
function toFileWithPath(file, path) {
  var f = withMimeType(file);
  if (typeof f.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}
var FILES_TO_IGNORE = [
  ".DS_Store",
  "Thumbs.db"
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, isDragEvt(evt) && evt.dataTransfer ? getDataTransferFiles(evt.dataTransfer, evt.type) : getInputFiles(evt)];
    });
  });
}
function isDragEvt(value) {
  return !!value.dataTransfer;
}
function getInputFiles(evt) {
  var files = isInput(evt.target) ? evt.target.files ? fromList(evt.target.files) : [] : [];
  return files.map(function(file) {
    return toFileWithPath(file);
  });
}
function isInput(value) {
  return value !== null;
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!dt.items)
            return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  var files = [];
  for (var i = 0; i < items.length; i++) {
    var file = items[i];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length)
                  return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [2];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}
var Dropzone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropzone.svelte-817dg2{flex:1;display:flex;flex-direction:column;align-items:center;padding:20px;border-width:2px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;transition:border 0.24s ease-in-out}.dropzone.svelte-817dg2:focus{border-color:#2196f3}",
  map: null
};
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { accept } = $$props;
  let { disabled = false } = $$props;
  let { getFilesFromEvent = fromEvent } = $$props;
  let { maxSize = Infinity } = $$props;
  let { minSize = 0 } = $$props;
  let { multiple = true } = $$props;
  let { preventDropOnDocument = true } = $$props;
  let { noClick = false } = $$props;
  let { noKeyboard = false } = $$props;
  let { noDrag = false } = $$props;
  let { noDragEventsBubbling = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { containerStyles = "" } = $$props;
  let { disableDefaultStyles = false } = $$props;
  createEventDispatcher();
  let rootRef;
  onDestroy(() => {
  });
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0)
    $$bindings.accept(accept);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.getFilesFromEvent === void 0 && $$bindings.getFilesFromEvent && getFilesFromEvent !== void 0)
    $$bindings.getFilesFromEvent(getFilesFromEvent);
  if ($$props.maxSize === void 0 && $$bindings.maxSize && maxSize !== void 0)
    $$bindings.maxSize(maxSize);
  if ($$props.minSize === void 0 && $$bindings.minSize && minSize !== void 0)
    $$bindings.minSize(minSize);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.preventDropOnDocument === void 0 && $$bindings.preventDropOnDocument && preventDropOnDocument !== void 0)
    $$bindings.preventDropOnDocument(preventDropOnDocument);
  if ($$props.noClick === void 0 && $$bindings.noClick && noClick !== void 0)
    $$bindings.noClick(noClick);
  if ($$props.noKeyboard === void 0 && $$bindings.noKeyboard && noKeyboard !== void 0)
    $$bindings.noKeyboard(noKeyboard);
  if ($$props.noDrag === void 0 && $$bindings.noDrag && noDrag !== void 0)
    $$bindings.noDrag(noDrag);
  if ($$props.noDragEventsBubbling === void 0 && $$bindings.noDragEventsBubbling && noDragEventsBubbling !== void 0)
    $$bindings.noDragEventsBubbling(noDragEventsBubbling);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.disableDefaultStyles === void 0 && $$bindings.disableDefaultStyles && disableDefaultStyles !== void 0)
    $$bindings.disableDefaultStyles(disableDefaultStyles);
  $$result.css.add(css);
  return `<div tabindex="${"0"}" class="${escape(disableDefaultStyles ? "" : "dropzone", true) + " " + escape(containerClasses, true) + " svelte-817dg2"}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", rootRef, 0)}><input${add_attribute("accept", accept, 0)} ${multiple ? "multiple" : ""} type="${"file"}" autocomplete="${"off"}" tabindex="${"-1"}" style="${"display: none;"}">
  ${slots.default ? slots.default({}) : `
    <p>Drag &#39;n&#39; drop some files here, or click to select files</p>
  `}
</div>`;
});
export { Dropzone as D };
