if ( typeof window === 'undefined' ) {
  require('../../app/arrays');
  var expect = require('chai').expect;
}

describe('arrays', function() {
  var a;

  beforeEach(function() {
    a = [ 1, 2, 3, 4 ];
  });

  it('you should be able to determine the location of an item in an array', function() {
    expect(a.indexOf(3)).to.eql(2);
    expect(a.indexOf(5)).to.eql(-1);
  });

  it('you should be able to sum the items of an array', function() {
    expect(a.reduce((s, n) => s + n)).to.eql(10);
  });

  it('you should be able to remove all instances of a value from an array', function() {
    a.push(2); // Make sure the value appears more than one time
    a.push(2); // Make sure the value appears more than one time in a row
    var result = a.filter(n => n != 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');
  });

  it('you should be able to remove all instances of a value from an array, returning the original array', function() {
    a.splice( 1, 0, 2 );
    a.push( 2 );
    a.push( 2 );

    const removeWithoutCopy = (ary, n) => {
      for (var i = ary.length - 1; i >= 0; i--) {
        if (ary[i] === n) {
          ary.splice(i, 1)
        }
      }
      return ary;
    }

    var result = removeWithoutCopy(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');

    // make sure that you return the same array instance
    expect(result).equal(a);
  });

  it('you should be able to add an item to the end of an array', function() {
    const append = (ary, n) => ary.concat([n]);

    var result = append(a, 10);

    expect(result).to.have.length(5);
    expect(result[result.length - 1]).to.eql(10);
  });

  it('you should be able to remove the last item of an array', function() {
    const truncate = (ary) => ary.slice(0, ary.length - 1);

    var result = truncate(a);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 2 3');
  });

  it('you should be able to add an item to the beginning of an array', function () {
    const prepend = (ary, n) => [n].concat(ary);

    var result = prepend(a, 10);

    expect(result).to.have.length(5);
    expect(result[0]).to.eql(10);
  });

  it('you should be able to remove the first item of an array', function () {
    const curtail = (ary) => ary.slice(1);

    var result = curtail(a);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('2 3 4');
  });

  it('you should be able to join together two arrays', function() {
    var c = [ 'a', 'b', 'c', 1 ];
    var result = a.concat(c);

    expect(result).to.have.length(8);
    expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
  });

  it('you should be able to add an item anywhere in an array', function() {
    const insert = (ary, n, i) => ary.slice(0, i).concat([n], ary.slice(i))

    var result = insert(a, 'z', 2);

    expect(result).to.have.length(5);
    expect(result.join(' ')).to.eql('1 2 z 3 4');
  });

  it('you should be able to count the occurences of an item in an array', function() {
    const count = (ary, n) => ary.filter(e => e === n).length

    var result = count([ 1, 2, 4, 4, 3, 4, 3 ], 4);

    expect(result).to.eql(3);
  });

  it('you should be able to find duplicates in an array', function() {
    const count = (ary, n) => ary.filter(e => e === n).length

    // const bitarray = (size) => {
    //   const _ary = new UintArray(size / 8)
    //   bary = {
    //     size,
    //     get: (i) => _ary[i / 8]  (i % 8)
    //     set: (i, n) => null
    //   }
    //   return bary
    // }

    const duplicates = (ary) => {
      const found = Array(ary.length).fill(0)
      return ary.filter(n => {
        found[n]++
        return (found[n] === 2)
      })
    }

    var result = duplicates([ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]);

    expect(result.sort()).to.eql([1, 3, 4]);
  });

  it('you should be able to square each number in an array', function() {
    var result = a.map(n => n * n);

    expect(result).to.have.length(4);
    expect(result.join(' ')).to.eql('1 4 9 16');
  });

  it('you should be able to find all occurrences of an item in an array', function() {
    const findAllOccurrences = (ary, n) => {
      return ary.map((elem, i) => (elem === n ? i : -1)).filter(n => n !== -1)
    }

    var result = findAllOccurrences([ 1, 2, 3, 4, 5, 6, 1, 7], 1);

    expect(result.sort().join(' ')).to.eql('0 6');
  });

});
