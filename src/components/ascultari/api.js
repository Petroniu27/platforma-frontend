// @ts-nocheck
'use strict';

// Returnează token-ul din localStorage (mai multe variante folosite în proiecte)
export function getToken() {
  try {
    var t1 = localStorage.getItem('token');
    if (t1) return t1;
    var raw = localStorage.getItem('user');
    if (!raw) return null;
    var u = JSON.parse(raw);
    if (u && u.token) return u.token;
    if (u && u.accessToken) return u.accessToken;
  } catch (e) {}
  return null;
}

// Mic helper de fetch cu token
export async function api(path, options) {
  options = options || {};
  var method = options.method || 'GET';
  var bodyObj = options.body;

  var headers = { 'Content-Type': 'application/json' };
  var token = getToken();
  if (token) headers.Authorization = 'Bearer ' + token;

  var payload = { method: method, headers: headers };
  if (bodyObj != null) payload.body = JSON.stringify(bodyObj);

  var res = await fetch(path, payload);
  if (!res.ok) {
    var err = 'Request failed';
    try {
      var j = await res.json();
      if (j && j.error) err = j.error;
    } catch (e) {}
    throw new Error(err);
  }
  return res.json();
}

// Formatări utile
export function fmtDateTime(d) {
  try {
    return new Date(d).toLocaleString('ro-RO', { dateStyle: 'medium', timeStyle: 'short' });
  } catch (e) { return String(d); }
}

export function toDatetimeLocalValue(date) {
  var d = date instanceof Date ? new Date(date.getTime()) : new Date();
  d = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return d.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
}

export function downloadICS(icsText, filename) {
  var name = filename || 'ascultare.ics';
  var blob = new Blob([icsText], { type: 'text/calendar;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}