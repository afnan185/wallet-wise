begin;
select plan(1); -- only one statement to run

SELECT has_column(
    'id',
    'id should exist'
);

select * from finish();
rollback;