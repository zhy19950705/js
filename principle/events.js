var prefix = '~'
function Events () {}

function EE(fn, context, once = false) {
    this.fn = fn
    this.context = context
    this.once = once
}

function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function')
    }
    var listener = new EE(fn, context, once)
    var evt = prefix ? prefix + event : event
    if (!emitter._events[evt]) {
        emitter._events[evt] = listener
        emitter._eventsCounts++
    } else if (!emitter._events[evt].fn) {
        emitter._events[evt].push(listener)
    } else {
        emitter._events[evt] = [emitter._events[evt], listener]
    }
    return emitter
}

function clearEvents (emitter, evt) {
    if (emitter._eventsCounts === 1) {
        emitter._events = new Events()
        emitter._eventsCounts = 0
    } else {
        delete emitter._events[evt]
    }
}

function EventEmitter() {
    this._events = new Events()
    this._eventsCounts = 0
}

EventEmitter.prototype.on = function (event, fn, context) {
    return addListener(this, event, fn, context, false)
}

EventEmitter.prototype.once = function (event, fn, context) {
    return addListener(this, event, fn, context, true)
}

EventEmitter.prototype.removeListener = function(event, fn, context, once) {
    var evt = prefix ? prefix + event : event
    if (!this._events[evt]) return
    if (!fn) {
        clearEvents(this, evt)
        return this
    }
    var listeners = this._events[evt]
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvents(this, evt)
        }
    } else {
        for (var i = 0, len = listeners.length, events = []; i < len; i++) {
            if (listeners[i].fn !== fn || (once && !listeners[i].once) || (context && listeners[i].context !== context)) {
                events.push(listeners[i])
            }
        }
    }
    if (events.length) {
        this._events[evt] = events.length === 1 ? events[0] : events
    } else {
        clearEvents(this, evt)
    }
    return this
}

EventEmitter.prototype.emit = function(event, ...args) {
    var evt = prefix ? prefix + event : event
    if (!this._events[evt]) return false
    var listeners = this._events[evt],
        len = arguments.length,
        args,
        i;
    if (listeners.fn) {
        if (listeners.once) {
            this.removeListener(event, listeners.fn, undefined, true);
        }
        listeners.fn.apply(listeners.context, args)
    } else {
        var length = listeners.length,
            j;
        for (let i = 0; i < length; i++) {
            if (listeners[i].once) {
                this.removeListener(event, )
            }
            listeners[i].fn.apply(listeners[i].context, args)
        }
    }
    return true
}

EventEmitter.prototype.off = EventEmitter.prototype.removeListener
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
EventEmitter.prefixed = prefix;
EventEmitter.EventEmitter = EventEmitter;